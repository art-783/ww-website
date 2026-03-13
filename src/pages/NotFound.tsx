const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6">Page not found</p>

      <a
        href={import.meta.env.BASE_URL}
        className="text-primary underline hover:text-primary/80"
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
