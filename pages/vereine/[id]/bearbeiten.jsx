import { vereinsbuddyPrisma as db1 } from '@/lib/prisma';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import VereinForm from '../components/VereinForm';

export default function VereinBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/vereine/${initialData.ID}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push('/vereine')
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Verein bearbeiten</h1>
            <VereinForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
    const { id } = context.params
    const session = await getSession(context)

    /*if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }*/

    // Nur Admins dürfen Vereine bearbeiten
    /*const isAdmin = session.user.vereine.some(v => v.Rolle === 'admin')
    if (!isAdmin) {
        return {
        redirect: {
            destination: '/admin',
            permanent: false,
        },
        }
    }*/

        const parsedId = parseInt(id);
        if (!parsedId || isNaN(parsedId)) {
            return {
                notFound: true,
            };
        }

    const verein = await db1.verein.findUnique({
        where: {
        ID: parsedId,
        },
    })

    if (!verein) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(verein)),
        },
    }
}