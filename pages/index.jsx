export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
    }
}

export default function LoginPage() {
    return null; // Keine Anzeige, weil direkt umgeleitet wird
}
