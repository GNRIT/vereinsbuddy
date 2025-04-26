import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import JFMitgliedForm from './components/JFMitgliedForm'

export default function NeuesJFMitglied() {
    const router = useRouter()

    const handleSubmit = async (payload) => {
        try {
            const response = await fetch('/api/jf-mitglieder', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
        
            if (response.ok) {
                router.push('/jf-mitglieder');
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Fehler beim Speichern');
            }
            } catch (error) {
            console.error('Fehler:', error);
            alert('Ein Fehler ist aufgetreten');
            }
        };
        

    // WICHTIG: das hier ist die React-Komponente!
    return (
        <Layout>
            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Neues JF-Mitglied anlegen</h1>
                <JFMitgliedForm onSubmit={handleSubmit} />
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    /*if (!session) {
        return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
        }
    }*/

    return {
        props: {},
    }
}
