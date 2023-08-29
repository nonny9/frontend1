// // 
// import { useSession, signIn, signOut } from "next-auth/react"

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/users')
//   const posts = await res.json()

//   return {
//     props: {
//       posts,
//     },
//   }
// }

// export default function Component({ posts }) {
//   const { data: session } = useSession()

//   if (session) {
//     return (
//       <>
//         <div className="container">
//           <div className="row">
//             <div className="col">
//               Signed in as {session.user.email} <br />
//               {session.user.fname} {session.user.lname} <br />
//               <button onClick={() => signOut()}>Sign out</button>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col">
//               <table className="table table-striped">
//                 <thead>
//                   <tr className="bg-warning">
//                     <th>Student ID</th>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Password</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {posts.users.map((post) => (
//                     <tr key={post.id}>
//                       <td>{post.studentid}</td>
//                       <td>{post.firstname}</td>
//                       <td>{post.lastname}</td>
//                       <td>{post.password}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }

//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";


export default function Component({ posts }) {
  const { data: session } = useSession()
  const router = useRouter()

  //----------------------start handleSubmit--------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const jsonData = {
      studentid: data.get('txt_studentid'),
      firstname: data.get('txt_firstname'),
      lastname: data.get('txt_lastname'),
      username: data.get('txt_username'),
      password: data.get('txt_password'),
      status: data.get('txt_status')
    }
    console.log("studentid:", jsonData.studentid);
    console.log("firstname:", jsonData.firstname);
    console.log("lastname:", jsonData.lastname);
    console.log("username:", jsonData.username);
    console.log("password:", jsonData.password);
    console.log("status:", jsonData.status);

     fetch('https://9d5b-184-82-26-219.ngrok-free.app/api/users', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.status == 'ok') {
          console.log('Add Data Success')
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

{/* <nav className="navbar navbar-light bg-warning">
  <div className="container-fluid">
  <div className="col">
  <div align="right"> Signed in as {session.user.email} {session.user.fname} {session.user.lname} <button  className="btn btn-danger" onClick={() => signOut()}>Sign out</button></div>
  </div>
  </div>
</nav> */}
<br></br>
<div className="card mx-auto" style={{ width: "1250px" }}>
      <div className="card-header">
        <h5 className="card-title"><i className="bi bi-person-plus"></i> Add Member</h5>
      </div>
      <div className="card-body text-left">
           <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student ID:</label>
            <input
              type="text"
              name="txt_studentid"
              id="txt_studentid"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              name="txt_firstname"
              id="txt_firstname"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              name="txt_lastname"
              id="txt_lastname"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>username:</label>
            <input
              type="text"
              name="txt_username"
              id="txt_username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="txt_password"
              id="txt_password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Status:</label>
            <input
              type="text"
              name="txt_status"
              id="txt_status"
              className="form-control"
            />
          </div>
          <br></br>
          <tr>
            <td>
          <button type="submit" className="btn btn-success">SAVE</button>&nbsp;&nbsp; {/* */}
          <button type="submit" className="btn btn-warning">Back</button> {/* */}
          </td>
          </tr>
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
//   )
// }