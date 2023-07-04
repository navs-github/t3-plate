import { signIn, signOut, useSession } from "next-auth/react";

type Props = {}

function Header({ }: Props) {
    const { data: sessionData } = useSession();
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex">a</div>
        </div>
    )
}

export default Header
