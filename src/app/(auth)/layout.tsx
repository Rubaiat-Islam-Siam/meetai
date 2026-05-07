interface Props {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:m-10 md:rounded-2xl">
            <div className="w-full max-w-sm md:max-w-md space-y-8">
                {children}
            </div>
        </div>
    );
}