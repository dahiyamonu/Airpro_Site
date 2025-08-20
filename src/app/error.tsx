"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-600">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
