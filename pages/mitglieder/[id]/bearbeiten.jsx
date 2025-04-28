import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import MitgliedForm from '../components/MitgliedForm';

export default function MitgliedBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/mitglieder/${initialData.ID}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push(`/mitglieder/${initialData.ID}`)
        } else {
            const errorData = await response.json()
            alert(errorData.message || 'Fehler beim Speichern')
        }
        } catch (error) {
        console.error('Fehler:', error)
        alert('Ein Fehler ist aufgetreten')
        }
    }

    return (
        <div>
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Mitglied bearbeiten</h1>
            <MitgliedForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
        const { id } = context.params;
        const session = await getSession(context);
    
    /*if (!session) {
        return {
            redirect: {
            destination: '/auth/login',
            permanent: false,
            },
        };
        }*/

        // ⛔️ Frühzeitig prüfen
        const parsedId = parseInt(id);
        if (!parsedId || isNaN(parsedId)) {
        return {
            notFound: true,
        };
        }

    const mitglied = await db1.person.findUnique({
        where: {
        ID: parsedId,
        },
        include: {
        vereinszuordnung: true,
        },
    });

    if (!mitglied) {
        return {
            notFound: true,
        };
    }
    
    return {
        props: {
            initialData: JSON.parse(JSON.stringify(mitglied)),
        },
    };
}

