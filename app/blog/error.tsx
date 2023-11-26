'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return <div>Oops {error.message}</div>;
}
