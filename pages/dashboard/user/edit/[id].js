import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(req) {
  const{ id } = req.query;
  const res = await fetch('http://localhost:3000/api/users/' + id, {
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

      fetch( 'http://localhost:3000/api/users', {
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

  // if (session) {
    return (
      <>
        
        <br></br>
<div className="card mx-auto" style={{ width: "1000px" }}>
      <div className="card-header">
        <h5 className="card-title"><i className="bi bi-person-plus"></i> Add Member</h5>
      </div>
      <div className="card-body text-left">
            <form onSubmit={handleUpdate}>
            {posts.users.map((post, i) => (
            <>
            <div className="form-group">
            <label></label>
            <input
            type="hidden"
            name="txt_studentid"
            id="txt_studentid"
            className="form-control"
            defaultValue={post.id}
            />
          </div>

            <div className="form-group">
            <label>ID:</label>
            <input
            type="text"
            name="txt_studentid"
            id="txt_studentid"
            className="form-control bg-white"
            defaultValue={post.id}
            required
            />
          </div>
            <div className="form-group">
            <label>Student ID:</label>
            <input
            type="text"
            name="txt_studentid"
            id="txt_studentid"
            className="form-control bg-white"
            defaultValue={post.studentid}
            required
            />
          </div>

          <div className="form-group">
            <label>First Name:</label>
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
          <div className="form-group">
            <label>Last Name:</label>
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
          <div className="form-group">
            <label>username:</label>
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
          <div className="form-group">
            <label>Password:</label>
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
          <div className="form-group">
            <label>Status:</label>
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
          <br></br>

                      <p />
          <br></br>
          <tr>
            <td>
          <button type="submit" className="btn btn-success">SAVE</button>&nbsp;&nbsp; {/* */}
          <button className="btn btn-warning"><Link href="/dashboard" > Back </Link></button> {/* */}
          </td>
          </tr>
          </>
                    ))}
          </form>
      </div>
      <br></br><br></br>
    </div>
      </>
      
    )
  }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }