<template>
    <section id="services" class="services contactsection">
    <div class="container">
      <div class="section-title2" data-aos="fade-in" data-aos-delay="100">
        <div class="traitvertical"></div>
        <p class="text-white ">CONTACTEZ-NOUS</p>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-md-12" data-aos="fade-up">
          <h1 class="section-heading text-white">NOUS AIMERIONS RECEVOIR DE VOS NOUVELLES</h1>
          <p class="section-p text-white">
            Avez-vous une question à nous poser ? Ou souhaitez-vous créer votre propre
            vidéo explicative ? Notre équipe est prête à répondre à toutes vos questions.
          </p>
        </div>
      </div>
      <div class="contact">
      <form action="forms/contact.php" method="post" role="form" class="php-email-form p-3 p-md-4">
        <div class="row m-6">
          <div class="col-xl-6 form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Nom complet *" required>
          </div>
          <div class="col-xl-6 form-group">
            <input type="text" class="form-control" name="societe" id="email" placeholder="Société" required>
          </div>
        </div>
        <div class="row">
            <div class="col-xl-6 form-group">
              <input type="text" name="telephone" class="form-control" id="name" placeholder="Téléphone" required>
            </div>
            <div class="col-xl-6 form-group">
              <input type="email" class="form-control" name="email" id="email" placeholder="Email" required>
            </div>
          </div>
        <div class="form-group">
          <textarea class="form-control" name="message" rows="5" placeholder="Comment pouvons-nous vous aider ? *" required></textarea>
        </div>
        <div class="text-center"><button class="submitbtn" type="submit">Envoyer</button></div>
        <div class="text-center coordonnees">
          <p class="contactemail text-white">contact@oblivius.ma</p>
          <p class="contactnumber text-white">(+212) 05 37 77 83 48 / 06 10 15 85 99</p>
        </div>
      </form>
      </div>
    </div>
          <div class="footer">
          <hr />
          <p class="realiseavec text-white">Réalisé avec <i class="bi bi-suit-heart-fill "></i> au Maroc. © Oblivius.ma 2022</p>
          <div class="socialmedia ">
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-google"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
            <a href=""><i class="bi bi-vimeo"></i></a>
            <a href=""><i class="bi bi-youtube"></i></a>
          </div>
          </div>
  </section>
</template>
<script>
    export default {
        name: 'Contact'
    }
</script>