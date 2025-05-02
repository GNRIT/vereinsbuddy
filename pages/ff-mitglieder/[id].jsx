import { vereinsbuddyPrisma as db1, vereinDbPrisma as db2 } from '@/lib/prisma';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FFMitgliedDetail({ mitglied, person }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Laden...</div>;
    }

    return (
        <div>
            <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        {person.Vorname} {person.Name}
                        {mitglied.Dienstgrad && ` (${mitglied.Dienstgrad})`}
                    </h1>
                    <div>
                        <Link href={`/ff-mitglieder/${mitglied.ID}/bearbeiten`}>
                            <span className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded mr-2 cursor-pointer">
                                Bearbeiten
                            </span>
                        </Link>
                        <button
                            onClick={() => router.push('/ff-mitglieder')}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
                        >
                            Zurück
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Persönliche Daten */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Persönliche Daten</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <InfoField label="Vorname" value={person.Vorname} />
                            <InfoField label="Name" value={person.Name} />
                            <InfoField label="Dienstgrad" value={mitglied.Dienstgrad || '-'} />
                            <InfoField label="Geburtsdatum" value={person.Geburtsdatum ? new Date(person.Geburtsdatum).toLocaleDateString() : '-'} />
                            <InfoField label="Eintrittsdatum" value={new Date(mitglied.Eintrittsdatum).toLocaleDateString()} />
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-500">Status</label>
                                <p className="mt-1 text-sm text-gray-900">
                                    {mitglied.Aktiv ? (
                                        <StatusBadge text="Aktiv" color="green" />
                                    ) : (
                                        <StatusBadge text="Inaktiv" color="red" />
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Kontaktdaten */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Kontaktdaten</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <InfoField label="E-Mail" value={person.Email} />
                            <InfoField label="Telefon" value={person.Telefon || '-'} />
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-500">Adresse</label>
                                <p className="mt-1 text-sm text-gray-900">
                                    {person.Strasse && person.Hausnummer ? `${person.Strasse} ${person.Hausnummer}` : '-'}
                                    <br />
                                    {person.Postleitzahl && person.Ort ? `${person.Postleitzahl} ${person.Ort}` : ''}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Systeminformationen */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Systeminformationen</h2>
                    <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoField label="Erstellt am" value={new Date(mitglied.ErstelltAm).toLocaleString()} />
                        <InfoField label="Geändert am" value={mitglied.GeaendertAm ? new Date(mitglied.GeaendertAm).toLocaleString() : '-'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Hilfskomponenten für Wiederverwendbarkeit
function InfoField({ label, value }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500">{label}</label>
            <p className="mt-1 text-sm text-gray-900">{value}</p>
        </div>
    );
}

function StatusBadge({ text, color }) {
    const bgColor = color === 'green' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    return (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor}`}>
            {text}
        </span>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;

    const parsedId = parseInt(id);
    if (!parsedId || isNaN(parsedId)) {
        return {
            notFound: true,
        };
    }

    const mitglied = await db2.ff_mitglied.findUnique({
        where: {
            ID: parsedId
        }
    });

    if (!mitglied) {
        return { notFound: true };
    }

    const person = await db1.person.findUnique({
        where: {
            ID: mitglied.Person_ID
        }
    });

    if (!person) {
        return { notFound: true };
    }

    const mappedMitglied = {
        ID: mitglied.ID,
        Dienstgrad: mitglied.Dienstgrad,
        Eintrittsdatum: mitglied.Eintrittsdatum,
        Aktiv: mitglied.Status === 'aktiv',
        ErstelltAm: mitglied.Erstellt_am,
        GeaendertAm: mitglied.Geaendert_am,
    };

    return {
        props: {
            mitglied: JSON.parse(JSON.stringify(mappedMitglied)),
            person: JSON.parse(JSON.stringify(person)),
        }
    };
}
