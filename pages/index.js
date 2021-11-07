import Form from '../components/Form';

export default function Home() {
  return (
    <div className="homepage">
      <header className="profile-header">
        <h1>Personal Profile</h1>
        <p><em>Update your profile so others can get to know you better</em></p>
      </header>
      <Form />
    </div>
  );
}
