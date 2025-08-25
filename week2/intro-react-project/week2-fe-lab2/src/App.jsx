function Hello() {
  return <p>Hello, React!</p>
} 2


function Bye() {
  return <p>Goodbye, React!</p>;
}

function app() {
  return <div> 
    <Hello />
    <Bye />
  </div>
};

export default app