import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import JFErziehungsberechtigterForm from './components/JFErziehungsberechtigterForm';

export default function NeuesErziehungsberechtigter() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (formData) => {
        try {
            const cleanedData = {
                JF_Mitglied_ID: parseInt(formData.JF_Mitglied_ID),
                Person_ID: parseInt(formData.Person_ID),
            };
    
            if (
                isNaN(cleanedData.JF_Mitglied_ID) ||
                isNaN(cleanedData.Person_ID)
            ) {
                alert("Bitte wähle gültige IDs für Mitglied und Person.");
                return;
            }
    
            setLoading(true);
    
            const response = await fetch('/api/jf_erziehungsberechtigter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cleanedData),
            });
    
            setLoading(false);
    
            if (response.ok) {
                router.push('/jf_erziehungsberechtigter');
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Fehler beim Speichern');
            }
        } catch (error) {
            setLoading(false);
            console.error('Fehler:', error);
            alert('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
        }
    };
    

    return (
        <div>
            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Neuer Erziehungsberechtigter anlegen</h1>
                <JFErziehungsberechtigterForm onSubmit={handleSubmit} />
                {loading && <p className="mt-4 text-center text-gray-600">Lädt...</p>} {/* Ladeanzeige */}
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}
