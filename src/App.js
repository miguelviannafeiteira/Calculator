import { useState } from 'react';
import './App.css';
import cn from 'clsx';

function App() {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const [modo, setModo] = useState(false);

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toFixed(3).toString());
  };

  const deleteLast = () => {
    if (calc === '') {
      return;
    } else {
      const valueCalc = calc.slice(0, -1);
      const valueResult = calc.slice(0, -1);
      setCalc(valueCalc);
      setResult(valueResult);
    }
  };

  const reset = () => {
    setCalc('');
    setResult('');
  };

  return (
    <div className={cn('bg', { whiteMode: modo })}>
      <div className="App">
        <div className="calculator">
          <header>
            <h1 className={cn('calc', { whiteMode: modo })}>calc</h1>
            <div className="divTheme">
              <h1 className={cn('theme', { whiteMode: modo })}>THEME</h1>
              <div className="mod">
                <label className={cn('custom-radio-btn', { whiteMode: modo })}>
                  <input
                    type="checkbox"
                    value="Modo"
                    checked={modo}
                    onChange={({ target }) => setModo(target.checked)}
                  />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </header>
          <div className={cn('display', { whiteMode: modo })}>
            {result ? (
              <span className={cn({ whiteMode: modo })}>({result})</span>
            ) : (
              ''
            )}{' '}
            {calc || '0'}
          </div>
          <div className={cn('container', { whiteMode: modo })}>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('7')}
            >
              7
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('8')}
            >
              8
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('9')}
            >
              9
            </button>
            <button
              className={cn('delete', { whiteMode: modo })}
              onClick={deleteLast}
            >
              DEL
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('4')}
            >
              4
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('5')}
            >
              5
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('6')}
            >
              6
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('+')}
            >
              +
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('1')}
            >
              1
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('2')}
            >
              2
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('3')}
            >
              3
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('-')}
            >
              &ndash;
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('.')}
            >
              .
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('0')}
            >
              0
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('/')}
            >
              &divide;
            </button>
            <button
              className={cn({ whiteMode: modo })}
              onClick={() => updateCalc('*')}
            >
              &times;
            </button>
            <button
              className={cn('reset', { whiteMode: modo })}
              onClick={reset}
            >
              RESET
            </button>
            <button
              className={cn('equal', { whiteMode: modo })}
              onClick={calculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
