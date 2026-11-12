import './CandidatesCard.css';


//Interface Props 

interface CandidatesCardProps {
    title:string;
    company:string;
    modality:string;
    salary:number;
}

export const CandidatesCard = ({title,company,modality,salary} : CandidatesCardProps) => {
  return (
    <article>

<h2>{title}</h2>

<p>{company} </p>
<p>Modality {modality}</p>
<p> salario: {salary}</p>

    </article>
  );
};

