import { vereinDbPrisma as db2 } from '@/lib/prisma';
import { useRouter } from 'next/router';
import DienstgradForm from '../components/DienstgradForm';

export default function DienstgradBearbeiten({ initialData }) {
    const router = useRouter();

    const handleSubmit = async (formData) => {
        try {
            const response = await fetch(`/api/dienstgrade/${initialData.ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push(`/dienstgrade/${initialData.ID}`);
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Fehler beim Speichern');
            }
        } catch (error) {
            console.error('Fehler:', error);
            alert('Ein Fehler ist aufgetreten');
        }
    };

    return (
        <div>
            <div className="bg-white shadow rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Dienstgrad bearbeiten</h1>
                <DienstgradForm initialData={initialData} onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    
    const parsedId = parseInt(id, 10); // ✅ parseInt mit Basis 10
    if (!parsedId || isNaN(parsedId)) {
        return {
            notFound: true,
        };
    }

    const dienstgrad = await db2.dienstgrad.findUnique({
        where: {
            ID: parsedId, // ✅ Hier richtig 'parsedId' verwenden und 'ID' groß schreiben
        },
    });

    if (!dienstgrad) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            initialData: JSON.parse(JSON.stringify(dienstgrad)),
        },
    };
}
