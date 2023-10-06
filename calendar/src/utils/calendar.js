import dayjs from "dayjs";

//fonction "getMonth" qui génère une matrice de jours pour un mois donné.
export function getMonth(month = dayjs().month()) {
  //Année en cours en utilisant dayjs.
  const year = dayjs().year();

  // Calculer le jour de la semaine du premier jour du mois (0 pour dimanche, 1 pour lundi, etc...).
  const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();

  // Initialiser une variable pour compter les jours du mois précédent et décaler la première ligne.
  let currentMonthCount = 0 - firstDayOfMonth;

  // Créez une matrice vide de 5 lignes (semaines) et 7 colonnes (jours de la semaine).
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      // Créez un objet dayjs pour représenter le jour actuel.
      const currentDay = dayjs(new Date(year, month, currentMonthCount));

      // Incrémente le compteur pour passer au jour suivant.
      currentMonthCount++;

      // Retournez l'objet représentant le jour actuel.
      return currentDay;
    });
  });
  return daysMatrix;
}
