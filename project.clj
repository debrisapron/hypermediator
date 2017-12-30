(defproject hypermediator "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :min-lein-version "2.5.3"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]]

  :plugins [[lein-cljsbuild "1.1.1"]]


  :clean-targets ^{:protect false} ["resources"]

  :cljsbuild {
    :builds [{:id "server"
              :source-paths ["src"]
              :compiler {
                :main hypermediator.server
                :output-to "resources/public/js/server-side/server.js"
                :output-dir "resources/public/js/server-side"
                :target :nodejs
                :optimizations :none
                :source-map true}}]})
