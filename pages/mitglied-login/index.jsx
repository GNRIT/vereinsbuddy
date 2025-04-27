import Link from 'next/link'
import Layout from '../../components/Layout'
import { vereinDbPrisma as prisma } from '../../lib/prisma'

export default function MitgliedLoginListe({ logins }) {
    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Mitglied-Logins</h1>
            <Link href="/mitglied-login/neu">
                <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Neues Login erstellen
                </a>
            </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Benutzer ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitglied ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Typ</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Erstellt am</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktionen</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {logins.map((login) => (
                    <tr key={login.ID}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{login.ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{login.Benutzer_ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{login.Mitglied_ID}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        login.Typ === 'ff' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                        {login.Typ.toUpperCase()}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(login.Erstellt_am).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link href={`/mitglied-login/${login.ID}/bearbeiten`}>
                        <a className="text-indigo-600 hover:text-indigo-900 mr-3">Bearbeiten</a>
                        </Link>
                        <Link href={`/mitglied-login/${login.ID}`}>
                        <a className="text-blue-600 hover:text-blue-900">Ansehen</a>
                        </Link>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const logins = await prisma.mitglied_login.findMany({
        orderBy: {
        Erstellt_am: 'desc',
        },
    })

    return {
        props: {
        logins: JSON.parse(JSON.stringify(logins)),
        },
    }
}