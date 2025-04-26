import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import AllergieForm from '../components/AllergieForm';

export default function AllergieBearbeiten({ initialData }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/allergien/${initialData.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push('/allergien')
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
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Allergie bearbeiten</h1>
            <AllergieForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
        </Layout>
    )
    }

    export async function getServerSideProps(context) {
    const { id } = context.params

    const allergie = await db2.allergie.findUnique({
        where: {
        ID: parseInt(id),
        },
        include: {
        ff_mitglied: true,
        jf_mitglied: true
        }
    })

    if (!allergie) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(allergie)),
        },
    }
}