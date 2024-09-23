import FloatinStuff from './components/FloatinStuff'

function App() {
  return (
    <>
      <div
        className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-sky-900
 flex items-center justify-center relative overflow-hidden"
      >
        <FloatinStuff
          color="bg-blue-500"
          size="w-64 h-64"
          top="-5%"
          left="10%"
          delay={0}
        />
        <FloatinStuff
          color="bg-sky-500"
          size="w-64 h-64"
          top="50%"
          left="80%"
          delay={4}
        />
        <FloatinStuff
          color="bg-blue-500"
          size="w-64 h-64"
          top="40%"
          left="-10%"
          delay={2}
        />
        <FloatinStuff
          color="bg-blue-500"
          size="w-64 h-64"
          top="-10%"
          left="50%"
          delay={2}
        />
      </div>
    </>
  );
}

export default App;
