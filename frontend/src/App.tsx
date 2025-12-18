import LessonDetails from "./LessonDetails";
import Layout from "./components/ui/layout/layout/Layout";
import Card from "./components/ui/layout/card/Card";

export default function App() {
  return (
    <Layout>
      <Card>
        <LessonDetails />
      </Card>
    </Layout>
  );
}
