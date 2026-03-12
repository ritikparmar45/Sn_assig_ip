export default function handler(req, res) {
  // CORS Headers (in case you call it from another domain in the future)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const { name, email, step } = req.body;

    if (!name || !email || !step) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Since this runs on Vercel, this will print to the Vercel Function Logs!
    console.log('--- New Interest Received ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Step: ${step}`);
    console.log('---------------------------');

    return res.status(200).json({ message: 'Interest submitted successfully.' });
  } else {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
