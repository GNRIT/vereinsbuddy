// pages/benutzerkonten/[id]/loeschen.jsx
import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function BenutzerkontoLoeschen({ benutzerkonto }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!window.confirm('Sind Sie sicher, dass Sie dieses Benutzerkonto löschen möchten?')) return;

        setIsDeleting(true);
        try {
            const response = await fetch(`/api/benutzerkonten/${benutzerkonto.ID}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.push('/benutzerkonten');
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Fehler beim Löschen');
            }
        } catch (error) {
            console.error('Fehler:', error);
            alert('Ein Fehler ist aufgetreten');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div>
            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Benutzerkonto löschen</h1>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700">
                                Möchten Sie wirklich dieses Benutzerkonto dauerhaft löschen?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end space-x-3">
                    <button
                        onClick={() => router.push('/benutzerkonten')}
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        disabled={isDeleting}
                    >
                        Abbrechen
                    </button>
                    <button
                        onClick={handleDelete}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        disabled={isDeleting}
                    >
                        {isDeleting ? 'Löschen...' : 'Löschen'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const { id } = context.params;

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    const parsedId = parseInt(id);
    if (!parsedId || isNaN(parsedId)) {
        return {
            notFound: true,
        };
    }

    const benutzerkonto = await db1.benutzerkonto.findUnique({
        where: {
            ID: parsedId,
        },
        include: {
            person: true,
            verein: true,
        },
    });

    if (!benutzerkonto) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            benutzerkonto: JSON.parse(JSON.stringify(benutzerkonto)),
        },
    };
}
