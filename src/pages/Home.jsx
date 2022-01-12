import QrReader from 'react-qr-reader';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();
  const [data, setData] = useState('No Result');
  const [error, setError] = useState('No Error');

  const handleScan = (data) => {
    if (data && data.startsWith('artofliving://')) {
      const [_key, slug] = data.split('artofliving://');
      history.push('/video/' + slug);
    }
  };
  const handleError = (err) => {
    setError(err);
    console.error(err);
  };
  return (
    <div class="bg-slate-400 grid h-screen grid-cols-1 gap-4 justify-items-center p-10 items-center">
      <div className="max-w-md w-72">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}
