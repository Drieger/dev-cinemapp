import 'package:dev_cinema_app/app/screens/movies/widgets/card.dart';
import 'package:dev_cinema_app/controller/home_controller.dart';
import 'package:dev_cinema_app/utils/routes.dart';
import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:provider/provider.dart';



class ProductPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final HomeController homeController = Provider.of(context);

    return LayoutBuilder(
      builder: (context, constraints_one) {
        return Container(
          color: Theme.of(context).primaryColor,
          child: SafeArea(
            child: Scaffold(
                appBar: AppBar(
                  title: Text("Filmes"),
                  centerTitle: true,
                ),
                //
                //
                body: Column(
                  children: [
                    Container(
                      margin: EdgeInsets.all(15),
                      width: MediaQuery.of(context).size.width * 0.4,
                      decoration: BoxDecoration(border: Border.all(width: 1.0)),
                      child: new TextField(
                        controller: homeController.searchView,
                        onChanged: (value) {
                          homeController.list(value);
                        },
                        decoration: InputDecoration(
                          hintText: "Pesquisar Filmes",
                          hintStyle: new TextStyle(color: Colors.grey[300]),
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ),
                    Observer(
                      builder: (context) {
                        if (homeController.listSizeMovies > 0) {
                          return Expanded(
                            child: GridView.builder(
                              itemCount: homeController.listSizeMovies,
                              gridDelegate:
                                  SliverGridDelegateWithMaxCrossAxisExtent(
                                      maxCrossAxisExtent: 550,
                                      childAspectRatio: 3 / 2,
                                      mainAxisExtent: 250,
                                      mainAxisSpacing: 5,
                                      crossAxisSpacing: 10),

                              // ),
                              itemBuilder: (context, index) {
                                return CardWidget(
                                  search: homeController.moviesList[index],
                                );
                              },
                            ),
                          );
                        } else {
                          return Center(
                            child: ListTile(
                              title: Text(
                                "Pesquise um Filme",
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
                  ],
                )),
          ),
        );
      },
    );
  }
}
