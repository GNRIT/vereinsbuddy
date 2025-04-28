import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { useRouter } from 'next/router'
import LehrgangsZuordnungForm from '../components/LehrgangsZuordnungForm'

export default function LehrgangsZuordnungBearbeiten({ initialData, mitglieder, lehrgaenge }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch(`/api/lehrgaenge/${initialData.ID}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push('/lehrgaenge')
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Lehrgangszuordnung bearbeiten</h1>
            <LehrgangsZuordnungForm 
            initialData={initialData} 
            mitglieder={mitglieder} 
            lehrgaenge={lehrgaenge} 
            onSubmit={handleSubmit} 
            />
        </div>
        </div>
    )
    }

    export async function getServerSideProps(context) {
    const { id } = context.params

    const [zuordnung, mitglieder, lehrgaenge] = await Promise.all([
        db2.ff_mitglied_lehrgang.findUnique({
        where: { ID: parseInt(id) }
        }),
        db2.ff_mitglied.findMany(),
        db2.lehrgang.findMany()
    ])

    if (!zuordnung) {
        return {
        notFound: true
        }
    }

    return {
        props: {
        initialData: JSON.parse(JSON.stringify(zuordnung)),
        mitglieder: JSON.parse(JSON.stringify(mitglieder)),
        lehrgaenge: JSON.parse(JSON.stringify(lehrgaenge))
        }
    }
}