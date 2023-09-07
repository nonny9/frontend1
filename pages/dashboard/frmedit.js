import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(req) {
  const id = req.query;
  const res = await fetch('http://localhost:3000/api/users?id=' + id, {
    method: 'GET',
  })
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Component({ posts }) {
  const { data: session } = useSession();
  const router = useRouter()

  //----------------------start handleUpdate--------------------------
  const handleUpdate = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      id: data.get('txt_studentid'),
      studentid: data.get('txt_studentid'),
      firstname: data.get('txt_firstname'),
      lastname: data.get('txt_lastname'),
      username: data.get('txt_username'),
      password: data.get('txt_password'),
      status: data.get('txt_status')
    }

      fetch(`/api/users`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 'ok') {
          router.push('/dashboard')
        } else {
          console.log('Add Data Not Success')
          router.push('/dashboard')
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
 

  }; //end handleSubmit

  if (session) {
    return (
      <>
        
        <br />
        <br />
        <br />
        <br />
        <main>
          <div className="container-fluid">
            <p></p>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <h5 className="card-header">
                    <i className="bi bi-person-vcard-fill" /> Add Member
                  </h5>
                  <div className="card-body">
                 
                    <form onSubmit={handleUpdate}>
                    {posts.users.map((post, i) => (
                    <>
                    <div className="input-group mb-3">
                        <input
                          type="text"
                          name="txt_studentid"
                          id="txt_studentid"
                          className="form-control bg-white"
                          placeholder="StudentID"
                          // onChange={(event) => { setId(event.target.value) }}
                          defaultValue={post.id}
                          required
                          disabled
                        />
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="txt_firstname"
                          id="txt_firstname"
                          className="form-control bg-white"
                          placeholder="Firstname"
                          // onChange={(event) => { setFirstname(event.target.value) }}
                          defaultValue={post.firstname}
                          required
                        />
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="txt_lastname"
                          id="txt_lastname"
                          className="form-control bg-white"
                          placeholder="Lastname"
                          // onChange={(event) => { setLastname(event.target.value) }}
                          defaultValue={post.lastname}
                          required
                        />
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="txt_username"
                          id="txt_username"
                          className="form-control bg-white"
                          placeholder="Username"
                          // onChange={(event) => { setUsername(event.target.value) }}
                          defaultValue={post.username}
                          required
                        />
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="txt_password"
                          id="txt_password"
                          className="form-control bg-white"
                          placeholder="Password"
                          // onChange={(event) => { setPassword(event.target.value) }}
                          defaultValue={post.password}
                          required
                        />
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          name="txt_status"
                          id="txt_status"
                          className="form-control bg-white"
                          // onChange={(event) => { setStatus(event.target.value) }}
                          defaultValue={post.status}
                          placeholder="Status"
                          required
                        />
                      </div>

                      <p />
                      <div className="row">
                        <div className="col-md-12 text-center text-lg-start">
                          <button
                            type="submit"
                            className="btn btn-success btn-block"
                          >
                            <span>Save</span>{" "}
                            <i className="bi bi-arrow-right" />
                          </button>&nbsp;&nbsp;&nbsp;
                          <Link href="./" className="btn btn-warning">Back</Link>
                        </div>
                      </div>
                      </>
                    ))}
                    </form>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <br></br>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}