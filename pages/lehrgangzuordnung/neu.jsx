import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import LehrgangsZuordnungForm from '../../components/LehrgangsZuordnungForm'
import { vereinDbPrisma as prisma } from '../../lib/prisma'

export default function NeueLehrgangsZuordnung({ mitglieder, lehrgaenge }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch('/api/lehrgang', {
            method: 'POST',
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
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Neue Lehrgangszuordnung</h1>
            <LehrgangsZuordnungForm 
            mitglieder={mitglieder} 
            lehrgaenge={lehrgaenge} 
            onSubmit={handleSubmit} 
            />
        </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    const [mitglieder, lehrgaenge] = await Promise.all([
        prisma.ff_mitglied.findMany(),
        prisma.lehrgang.findMany()
    ])

    return {
        props: {
        mitglieder: JSON.parse(JSON.stringify(mitglieder)),
        lehrgaenge: JSON.parse(JSON.stringify(lehrgaenge))
        }
    }
}