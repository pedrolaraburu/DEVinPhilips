import { Component } from '@angular/core';

@Component({
  selector: 'app-card-fotos',
  templateUrl: './card-fotos.component.html',
  styleUrls: ['./card-fotos.component.scss']
})
export class CardFotosComponent {
  arrayFotos: any = [
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fp2.bahamut.com.tw%2FB%2F2KU%2F46%2Fb7a59dca250c439433e641c8a51gz225.JPG&f=1&nofb=1&ipt=e32fa54f152c647d0a8e44387ccf12e6c87207aa0d20c28ca3f476b927412b9e&ipo=images',
      description: 'Rockman EXE Advanced Collection, disponível no Nintendo Switch, PC e PS4.'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.epicgames.com%2Foffer%2F428115def4ca4deea9d69c99c5a5a99e%2FEGS_Destiny2Lightfall_Bungie_AddOn_S1_2560x1440-d8b7472c54040d10d8710f5a269a5437&f=1&nofb=1&ipt=7b85de24d015b5e6b39548d2561c53f2d20e1173fb6320a0bd1c57d1f1bcabf7&ipo=images',
      description: 'Destiny 2: Lightfall, disponível para PC, PS4, Xbox One e Epic Games.'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.nintendo.com%2Fimage%2Fupload%2Fc_fill%2Cw_1200%2Fq_auto%3Abest%2Ff_auto%2Fdpr_2.0%2Fncom%2Fen_US%2Fgames%2Fswitch%2Ft%2Fthe-legend-of-zelda-tears-of-the-kingdom-switch%2Fhero&f=1&nofb=1&ipt=3d9ecfe52cbccc52a44c640c070647091f7c719666fe524524b17cc3de3069ec&ipo=images',
      description: 'The Legend of Zelda: Tears of the Kingdom, disponível para Nintendo Switch.'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.futurebehind.com%2Fwp-content%2Fuploads%2F2021%2F05%2FPokemon_Legends_Arceus_1-2048x1223.jpeg&f=1&nofb=1&ipt=c46e56d6c2f133b0b292e50ba09c25d8973a5646f5736b2b56e90ac48f668a02&ipo=images',
      description: 'Pokémon Legends Arceus, disponível para Nintendo Switch.'
    },
    {
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.ibtimes.com%2Fsites%2Fwww.ibtimes.com%2Ffiles%2Fstyles%2Ffull%2Fpublic%2F2021%2F01%2F20%2Foverwatch-2-gameplay-trailer.jpg&f=1&nofb=1&ipt=a3329f4ddc03292d0ef0d78405f60bdb0d4a20ae040f44cbd83f44927d128fd0&ipo=images',
      description: 'Overwatch 2, disponível para PC, PS4, Xbox One.'
    },
  ]
}
