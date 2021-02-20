import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Notifi, EnqueNotifi } from 'react-notifi';
import DefaultSnack from './wrapper';
import 'react-notifi/dist/index.css';
import './wrapper.css';

export const notifi = new EnqueNotifi({
  wrapper: ({ message, ...rest }) => {
    return <DefaultSnack {...rest}>{message}</DefaultSnack>;
  },
});

let n = 0;
function Hello() {
  const hideDuration = 3000;
  const maxToast = 3;
  return (
    <div
      className="example"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>React Notifi</h1>
      <p>Tiny (1.1kb) toast library for react notifications with animations and stackable toast's feature.",</p>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/contactyash/react-notifi">
          Github link
        </a>
      </div>
      {[
        ['bottomLeft', 'bottomCenter', 'bottomRight'],
        ['topLeft', 'topCenter', 'topRight'],
      ].map(row => {
        return (
          <div key={row} style={{ marginTop: 10 }}>
            {row.map(col => {
              return (
                <button
                  key={col + row}
                  onClick={() => {
                    notifi.enqueue('Boom! Here is a message.' + ++n, {
                      position: col,
                      autoHideDuration: hideDuration,
                      maxToast,
                    });
                  }}
                >
                  position = {col}
                </button>
              );
            })}
          </div>
        );
      })}
      {[
        ['default', 'success', 'warning'],
        ['error', 'info'],
      ].map(row => {
        return (
          <div key={row} style={{ marginTop: 10 }}>
            {row.map(col => {
              return (
                <button
                  key={col + row}
                  onClick={() => {
                    notifi.enqueue('Boom! Here is a message.' + ++n, {
                      type: col,
                      autoHideDuration: hideDuration,
                      maxToast,
                    });
                  }}
                >
                  type = {col}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
function App() {
  return (
    <>
      <Notifi />
      <Hello />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
