import 'package:dev_cinema_app/controller/home_controller.dart';
import 'package:dev_cinema_app/model/movies_model.dart';
import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:provider/provider.dart';

class CardWidget extends StatelessWidget {
  final Search search;

  const CardWidget({Key key, this.search}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    //

    return LayoutBuilder(
      builder: (context, constraints) {
        final HomeController homeController = Provider.of(context);
        return ClipRRect(
            borderRadius: BorderRadius.circular(
              20,
            ),
            child: Observer(
              builder: (context) {
                return Container(
                  margin: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: Colors.black,
                    ),
                  ),
                  child: GridTile(
                    child: InkWell(
                      onTap: () {},
                      child: Image.network(
                        search.poster,
                        errorBuilder: (context, error, stackTrace) =>
                            Center(child: Text("Sem Imagem"),),
                        fit: BoxFit.contain,
                        semanticLabel: search.title,
                      ),
                    ),
                    //
                    //
                    footer: GridTileBar(
                      title: Expanded(
                        child: Text(
                          search.title,
                          textAlign: TextAlign.start,
                          style: TextStyle(fontSize: 25, color: Colors.white),
                        ),
                      ),
                      subtitle: Expanded(
                        child: Text(
                          " ${search.year}",
                          textAlign: TextAlign.start,
                          style: TextStyle(fontSize: 25, color: Colors.white),
                        ),
                      ),
                      trailing: IconButton(
                        onPressed: () async {
                          await homeController.addListFavorite(search);
                        },
                        icon: Icon(
                          homeController.moviesIsFavorite(search.imdbID)
                              ? Icons.favorite
                              : Icons.favorite_border_outlined,
                        ),
                      ),
                      backgroundColor: Colors.black45,
                    ),
                  ),
                );
              },
            ));
      },
    );
  }
}
