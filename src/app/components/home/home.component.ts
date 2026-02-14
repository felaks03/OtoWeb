import { Component, OnInit } from '@angular/core';
import { Imagesbg } from 'src/app/interfaces/imagesbg.interface';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  numImg: number = 1;

  numImgUp() {
    if (this.numImg < this.imgsdb.length) {
      this.numImg++;
    } else {
      this.numImg = 1;
    }
    document.getElementById('all')!.style.backgroundImage =
      this.imgsdb[this.numImg - 1].url;
  }
  numImgDown() {
    if (this.numImg > 1) {
      this.numImg--;
    } else {
      this.numImg = this.imgsdb.length;
    }
    document.getElementById('all')!.style.backgroundImage =
      this.imgsdb[this.numImg - 1].url;
  }

  imgsdb: Imagesbg[] = [
    {
      id: 1,
      title: 'OTORRINOLARINGOLOGÍA',
      text: 'La otorrinolaringología es la especialidad médica que estudia y trata las patologías del oído, nariz y garganta. Incluye aspectos importantes para nuestra vida diaria como pueden ser el ronquido, las alteraciones de la voz, del equilibrio (vértigo), en la respiración nasal (la rinitis, sinusitis, desviaciones del tabique nasal), las enfermedades del cuello o los problemas en la audición.',
      url: "url('../../../assets/principal.jpg')",
    },
    {
      id: 2,
      title: 'OTORRINOLARINGOLOGÍA INFANTIL',
      text: 'La población infantil, por sus peculiares características, precisa de una dedicación y atención especializada para un correcto manejo de los procesos del área otorrinolaringológica. Es muy importante resaltar la gran importancia de una correcta audición en el niño, fundamental para su desarrollo tanto intelectual, social, personal como para el resto de aspectos de la vida diaria. ',
      url: "url('../../../assets/infantil.jpg')",
    },
    {
      id: 3,
      title: 'RONQUIDO/SAOS',
      text: 'El ronquido y la apnea del sueño representan una patología muy frecuente en la sociedad y provocan una importante merma en la calidad de vida del paciente. Esto se puede deber al cansancio crónico y la hipersomnia diurna que generan. Estas situaciones pueden implicar un aumento de accidentes de tráfico, enfermedades cardiovasculares, etc. ',
      url: "url('../../../assets/operacion4.jpg')",
    },
    {
      id: 4,
      title: 'PATOLOGÍA DE LA VOZ',
      text: 'Las disfonías o alteración en las cualidades de la voz, precisan un correcto diagnóstico, dado que pueden ser un reflejo de la presencia de lesiones en las cuerdas vocales. Una atención especializada y un seguimiento estrecho es de especial importancia sobre todo en los pacientes fumadores. ',
      url: "url('../../../assets/laringe12.jpg')",
    },
    {
      id: 5,
      title: 'MAREO Y VÉRTIGO',
      text: 'El vértigo y las alteraciones del equilibrio provocan una disminución importante en la calidad de vida de aquel que lo padece, pudiendo llegar incluso a ser incapacitantes. Muchos de estos procesos se asocian a enfermedades del oído, lo que requiere un exhaustivo estudio para un correcto diagnóstico y tratamiento.',
      url: "url('../../../assets/niño2.jpg')",
    },
    {
      id: 6,
      title: 'NARIZ Y SENOS PARANASALES',
      text: 'La dificultad respiratoria nasal es una de las patologías que con más frecuencia se puede presentar en la región facial. Esta puede ser debida a muchas causas tales como las alteraciones en el tabique nasal, la congestión por alergia, la existencia de pólipos o vegetaciones y los procesos infecciosos como lo son las sinusitis, siendo todas ellas susceptibles de tratamiento médico o quirúrgico. ',
      url: "url('../../../assets/quirofanoedit.jpg')",
    },
    {
      id: 7,
      title: 'PATOLOGÍA DEL CUELLO',
      text: 'La aparición de patología en el área cervical puede ser reflejo de alteraciones a nivel tiroideo, de las glándulas salivares e incluso de los ganglios linfáticos de dicha región. Merecen especial consideración tanto en su diagnóstico como en su tratamiento. ',
      url: "url('../../../assets/cuello.jpg')",
    },
    {
      id: 8,
      title: 'AUDIOLOGÍA y TRATAMIENTO DE LA SORDERA',
      text: 'Son innumerables los problemas que se pueden presentar a nivel de los oídos, no solo de forma aguda sino también con características crónicas. Las patologías como las infecciones a alteraciones en la audición, son altamente prevalentes en la sociedad. El oído precisa un correcto estudio y, con frecuencia, pruebas complementarias para llegar a un diagnóstico de certeza y poder así ofrecer el mejor tratamiento individualizado para cada caso.',
      url: "url('../../../assets/op1.jpg')",
    },
  ];
}
