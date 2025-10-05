import {AnimationProvider, useAnimationContext} from "./context/AnimationContext";
import AppContent from "./AppContent";

function App() {
  return (
    <AnimationProvider>
      <AppContent />
    </AnimationProvider>
  );
}

export default App;
