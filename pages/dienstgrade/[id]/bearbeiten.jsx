import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import { getDienstgradById, updateDienstgrad } from '../services/dienstgradService'
import DienstgradForm from './components/DienstgradForm'

export default function DienstgradBearbeiten({ dienstgrad }) {
    const router = useRouter()

    const handleSubmit = async (formData) => {
        try {
        await updateDienstgrad(dienstgrad.id, formData)
        router.push('/dienstgrade')
        } catch (error) {
        console.error('Fehler beim Aktualisieren:', error)
        alert('Fehler beim Aktualisieren des Dienstgrads')
        }
    }

    return (
        <Layout>
        <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dienstgrad bearbeiten</h1>
            <DienstgradForm initialData={dienstgrad} onSubmit={handleSubmit} />
        </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params
    const dienstgrad = await getDienstgradById(id)

    if (!dienstgrad) {
        return {
        notFound: true,
        }
    }

    return {
        props: {
        dienstgrad: JSON.parse(JSON.stringify(dienstgrad)),
        },
    }
}