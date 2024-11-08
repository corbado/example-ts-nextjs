"use client";

import { useCorbado } from "@corbado/react";
import Link from "next/link";

export function HomePage({ city }: { city: string }) {
    const { loading, user, isAuthenticated } = useCorbado();

    // do not use any of the other states while loading
    if (loading) {
        return <div className="loader" />;
    }
    // client-side authentication check with information obtained from useCorbado()
    if (!isAuthenticated) {
        return <GuestHomePage />;
    }

    return (
        <div>
            <h1>
                Welcome {user?.name || user?.email} from {city}!
            </h1>
            <p>
                You now have access to everything and can visit the closed area:
            </p>
            <Link href="/closed" className="button">
                Closed
            </Link>
        </div>
    );
}

function GuestHomePage() {
    return (
        <div>
            <h1>Welcome Guest!</h1>
            <p>
                This Corbado example implementation demonstrates Corbado’s
                passkey-first authentication solution.{" "}
            </p>
            <p>It covers all relevant aspects like -</p>
            <ul>
                <li>Sign-up</li>
                <li>Login</li>
                <li>Protecting Routes</li>
            </ul>
            <p>
                It can be used as a starting point for your own application or
                to learn.
            </p>
            <Link className="button" href="/signup">
                Sign up
            </Link>
            <Link className="button" href="/login">
                Login
            </Link>
        </div>
    );
}
