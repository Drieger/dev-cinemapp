import 'package:dev_cinema_app/app/screens/movies/widgets/card.dart';
import 'package:dev_cinema_app/controller/home_controller.dart';
import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:provider/provider.dart';

class InfoPage extends StatelessWidget {
  const InfoPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final HomeController homeController = Provider.of(context);

    return LayoutBuilder(
      builder: (context, constraints_um) {
        //
        //
        return Container(
          color: Theme.of(context).primaryColor,
          child: SafeArea(
            //
            //
            child: Scaffold(
              //
              //
              appBar: AppBar(
                title: Text("Favoritos"),
                centerTitle: true,
              ),
              //
              //
              body: Observer(
                builder: (context) {
                  if (homeController.listSizeFavorite > 0) {
                    return GridView.builder(
                      itemCount: homeController.listSizeFavorite,
                      gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
                          maxCrossAxisExtent: 550,
                          childAspectRatio: 3 / 2,
                          mainAxisExtent: 250,
                          mainAxisSpacing: 5,
                          crossAxisSpacing: 10),

                      // ),
                      itemBuilder: (context, index) {
                        return CardWidget(
                          search: homeController.moviesFavoriteList[index],
                        );
                      },
                    );
                  } else {
                    return Center(
                      child: ListTile(
                        title: Text(
                          "Sem Filme Favoritos",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 25,
                            color: Theme.of(context).accentColor,
                          ),
                          // overflow: TextOverflow.ellipsis,
                        ),
                      ),
                    );
                  }
                },
              ),
            ),
          ),
        );
      },
    );
  }
}
