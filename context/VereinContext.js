import { useSession } from 'next-auth/react'
import { createContext, useContext, useEffect, useState } from 'react'

const VereinContext = createContext()

export function VereinProvider({ children }) {
    const { data: session } = useSession()
    const [aktiverVerein, setAktiverVerein] = useState(null)

    useEffect(() => {
        if (session?.user?.vereine?.length > 0) {
            setAktiverVerein(prev => prev ?? session.user.vereine[0])
        }
    }, [session])

    const vereinWechseln = (vereinId) => {
        const neuerVerein = session?.user?.vereine?.find(v => v.vereinId === vereinId)
        if (neuerVerein) {
        setAktiverVerein(neuerVerein)
        }
    }

    return (
        <VereinContext.Provider value={{ aktiverVerein, vereinWechseln }}>
        {children}
        </VereinContext.Provider>
    )
    }

    export function useVerein() {
    const context = useContext(VereinContext)
    if (context === undefined) {
        throw new Error('useVerein muss innerhalb eines VereinProviders verwendet werden')
    }
    return context
}