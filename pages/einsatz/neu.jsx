import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import EinsatzForm from './components/EinsatzForm';

export default function NeuerEinsatz() {
    const router = useRouter();

    const handleSubmit = async (formData) => {
        try {
            console.log('Formulardaten vor dem Absenden:', formData);
    
            const response = await fetch('/api/einsatz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                router.push('/einsatz');
            } else {
                const errorData = await response.json();
                console.log('Fehlerantwort vom Server:', errorData);
                alert(errorData.message || 'Fehler beim Speichern');
            }
        } catch (error) {
            console.error('Fehler beim Absenden:', error);
            alert('Ein Fehler ist aufgetreten');
        }
    };
    

    return (
        <div>
            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Neuen Einsatz anlegen</h1>
                <EinsatzForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    /*
    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }
    */

    return {
        props: {},
    };
}
