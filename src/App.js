/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import ButtonTable from './components/Button/ButtonTable';

function App() {
  return (
    <>
      <div>
        <Breadcrumb />
      </div>
      <div>
        <ButtonTable />
      </div>
    </>
  );
}

export default App;
