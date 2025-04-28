import { getSession } from 'next-auth/react'
import { vereinDbPrisma as prisma } from '../../lib/prisma'

export default function AdminDashboard({ stats }) {
    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-800">Aktive Mitglieder (FF)</h2>
                <p className="text-3xl font-bold text-blue-600 mt-2">{stats.aktiveMitgliederFF}</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-green-800">Aktive Mitglieder (JF)</h2>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.aktiveMitgliederJF}</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-purple-800">Einsätze ({new Date().getFullYear()})</h2>
                <p className="text-3xl font-bold text-purple-600 mt-2">{stats.einsaetzeAktuellesJahr}</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-yellow-800">Durchschnittl. Teilnahme</h2>
                <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.durchschnittTeilnahme}%</p>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Letzte Einsätze</h2>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Einsatz</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teilnehmer</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {stats.letzteEinsaetze.map((einsatz) => (
                        <tr key={einsatz.ID}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(einsatz.StartDatum).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{einsatz.Titel}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{einsatz._count.teilnahmen}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Aktivste Mitglieder</h2>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitglied</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teilnahmen</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Letzte Teilnahme</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {stats.aktivsteMitglieder.map((mitglied) => (
                        <tr key={mitglied.ID}>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                            {mitglied.Vorname} {mitglied.Name}
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {mitglied._count.teilnahmen}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {mitglied.letzteTeilnahme ? new Date(mitglied.letzteTeilnahme).toLocaleDateString() : '-'}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
    const session = await getSession(context)
    const currentYear = new Date().getFullYear()

    /*if (!session || !session.user.vereine.some(v => v.rolle === 'admin')) {
        return {
        redirect: {
            destination: '/',
            permanent: false,
        },
        }
    }*/

    // Statistikdaten abfragen
    const aktiveMitgliederFF = await prisma.mitglied.count({
        where: {
        Status: 'Aktiv',
        Abteilung: 'FF'
        }
    })

    const aktiveMitgliederJF = await prisma.mitglied.count({
        where: {
        Status: 'Aktiv',
        Abteilung: 'JF'
        }
    })

    const einsaetzeAktuellesJahr = await prisma.einsatz.count({
        where: {
        StartDatum: {
            gte: new Date(`${currentYear}-01-01`),
            lte: new Date(`${currentYear}-12-31`)
        },
        Typ: 'einsatz'
        }
    })

    const letzteEinsaetze = await prisma.einsatz.findMany({
        where: {
        Typ: 'einsatz'
        },
        include: {
        _count: {
            select: { teilnahmen: true }
        }
        },
        orderBy: {
        StartDatum: 'desc'
        },
        take: 5
    })

    const aktivsteMitglieder = await prisma.mitglied.findMany({
        where: {
        Status: 'Aktiv'
        },
        include: {
        _count: {
            select: { teilnahmen: true }
        },
        teilnahmen: {
            orderBy: {
            Erstellt_am: 'desc'
            },
            take: 1
        }
        },
        orderBy: {
        teilnahmen: {
            _count: 'desc'
        }
        },
        take: 5
    })

    // Durchschnittliche Teilnahme berechnen
    const teilnahmeStats = await prisma.teilnahme.groupBy({
        by: ['Veranstaltung_ID'],
        _count: {
        _all: true
        },
        where: {
        veranstaltung: {
            Typ: 'einsatz',
            StartDatum: {
            gte: new Date(`${currentYear}-01-01`),
            lte: new Date(`${currentYear}-12-31`)
            }
        }
        }
    })

    const durchschnittTeilnahme = teilnahmeStats.length > 0 
        ? Math.round(teilnahmeStats.reduce((sum, stat) => sum + stat._count._all, 0) / teilnahmeStats.length)
        : 0

    return {
        props: {
        stats: {
            aktiveMitgliederFF,
            aktiveMitgliederJF,
            einsaetzeAktuellesJahr,
            durchschnittTeilnahme,
            letzteEinsaetze: JSON.parse(JSON.stringify(letzteEinsaetze)),
            aktivsteMitglieder: JSON.parse(JSON.stringify(aktivsteMitglieder.map(m => ({
            ...m,
            letzteTeilnahme: m.teilnahmen[0]?.Erstellt_am
            }))))
        }
        }
    }
}