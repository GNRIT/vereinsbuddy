import { vereinDbPrisma as db2 } from '@/lib/prisma'
import { useRouter } from 'next/router'
import LehrgangsZuordnungForm from './components/LehrgangsZuordnungForm'

export default function NeueLehrgangsZuordnung({ mitglieder, lehrgaenge }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        const response = await fetch('/api/lehrgangzuordnung', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            router.push('/lehrgangzuordnung')
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
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Neue Lehrgangszuordnung</h1>
            <LehrgangsZuordnungForm
            mitglieder={mitglieder}
            lehrgaenge={lehrgaenge}
            onSubmit={handleSubmit}
            />
        </div>
        </div>
    )
}

export async function getServerSideProps() {
    const [mitglieder, lehrgaenge] = await Promise.all([
        db2.ff_mitglied.findMany(),
        db2.lehrgang.findMany()
    ])

    return {
        props: {
        mitglieder: JSON.parse(JSON.stringify(mitglieder)),
        lehrgaenge: JSON.parse(JSON.stringify(lehrgaenge))
        }
    }
}