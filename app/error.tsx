"use client";

export default function Error({ error, reset }: any) {
    return (
        <div className="h-full w-full flex-center flex-col gap-5">
            <p className="text-3xl text-red-500">Something went wrong! </p>
            <p className="text-red-500">{error}</p>
            <button className="button" onClick={() => reset()}>
                Retry
            </button>
        </div>
    );
}