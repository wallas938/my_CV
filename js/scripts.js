/** Script principal */

$(function () {
  var arrows = $('.fa-arrow-alt-circle-down')
  $(arrows).click(function () {
    displayBlocks($(this))

    setArrowRotation($(this))
    
  })

})

/** FIN du Script principal */

/*************   ***************/

/** DEBUT Déclaration de fonctions */


//Fait pivoter les fleches 
function setArrowRotation (arrow) {
  let currentAnim = arrow.css('animation-name')
    switch (currentAnim) {
      case 'none':
        if(arrow.css('transform') ==='matrix(-1, 0, 0, -1, 0, 0)') {
          arrow.css('animation-name', 'upSideDown')
          arrow.css('animation-direction', 'reverse')
        }else {
          arrow.css('animation-name', 'upSideDown')
        }
        break;
      case 'upSideDown':
          arrow.css('animation-name', 'rightSideUp')
        break;
      case 'rightSideUp':
          arrow.css('animation-name', 'upSideDown')
        break;
      default:
        break;
    }
}

//Affiche les blocks en fonction des fleches pressées 
function displayBlocks(arrow) {
  let idParent = arrow.parent().attr('id')
    switch (idParent) {
      case 'title-comp':
        if($('#competences-window').css('display') === 'none')
          $('#competences-window').slideDown(1000)
        else
          $('#competences-window').slideUp(1000)
        break;
      case 'mobile-arrow-block':
        if ($('#block2').css('display') === 'none' || $('#block1').css('display') === 'none') {

          $('#block1').slideDown(1000)
          $('#block2').slideDown(1000)
        }else {
          $('#block1').slideUp(1000)
          $('#block2').slideUp(1000)
        }
        break;
          case 'title-dip_form':
            if ($('#block1').css('display') === 'none')
              $('#block1').slideDown(1000)
            else
              $('#block1').slideUp(1000)
        break;
          case 'title-exp_pro':
            if ($('#block2').css('display') === 'none')
              $('#block2').slideDown(1000)
            else
              $('#block2').slideUp(1000)
          break;

          default:
        break;
    }
}

/** FIN Déclaration de fonctions */

/*************   ***************/