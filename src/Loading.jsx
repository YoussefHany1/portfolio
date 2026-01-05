function Loading() {
  return (
    <div className="loader flex justify-center items-center h-screen">
      <div
        data-glitch="Loading..."
        className="glitch relative text-6xl font-bold leading-tight text-white tracking-wider z-10"
      >
        Loading...
      </div>
    </div>
  );
}
export default Loading;
