import { useContentful } from 'react-contentful';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';

export default function Video(props) {
  const { data, error, fetched, loading } = useContentful({
    //contentType: 'Page',
    id: props.match.params.slug,
  });
  if (loading || !fetched) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (!data) {
    return <p>Page does not exist.</p>;
  }

  // See the Contentful query response
  console.debug(data);
  return (
    <div className="bg-gray-800 text-slate-300">
      <h2 className="font-semibold text-lg text-center p-5">
        {data?.fields?.title}
      </h2>

      <Player src={data?.fields?.track?.fields?.file.url} autoPlay>
        <BigPlayButton position="center" />
      </Player>
      <p className="text-base text-center p-5">{data?.fields?.description}</p>
    </div>
  );
}
