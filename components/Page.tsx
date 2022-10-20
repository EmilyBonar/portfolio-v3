import Header from './Header';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Page: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col w-5/6 max-h-screen pb-4 m-auto max-w-7xl">
      <Header title={props.title} />
      <NavBar title={props.title} />
      <main className="w-full">{props.children}</main>
    </div>
  );
};

export default Page;
