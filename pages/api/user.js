export default function handler(req, res) {
        res.status(200).json([
            {id: '1', firstname: 'Kritsadapruet', lastname: 'Auprajong', username: 'kritsadapruet020', password: '123456',status: 'admin'}, 
            {id: '2', firstname: 'กฤษฎาพฤทธิ์', lastname: 'อุประโจง', username: 'kritsadapruet', password: '123456',status: 'user'}
        ]);
}