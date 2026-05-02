function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Meissa Babou. Tous droits réservés.
        </p>
        <p className="text-sm">
          Administrateur Systèmes, Réseaux & Cybersécurité
        </p>
      </div>
    </footer>
  );
}

export default Footer;
