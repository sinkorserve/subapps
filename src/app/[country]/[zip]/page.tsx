interface Props {
  params: { country: string; zip: string };
}

export default function LandingPage({ params }: Props) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">
        Welcome to {params.country} / {params.zip} landing page!
      </h1>
      <p>This page will show data specific to {params.country}-{params.zip}</p>
    </div>
  );
}
