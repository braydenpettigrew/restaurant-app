-- MySQL dump 10.13  Distrib 8.0.40, for macos14 (arm64)
--
-- Host: localhost    Database: restaurant_app
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `username` varchar(12) NOT NULL,
  `password` varchar(200) NOT NULL,
  `type` char(1) NOT NULL,
  PRIMARY KEY (`username`),
  CONSTRAINT `account_chk_1` CHECK ((`type` in (_utf8mb4'E',_utf8mb4'C')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES ('Abel68','$2b$10$/px6dw8zfzr8vD91fA4eoudCGl3mGkkUeqQ/We7.xRw.lJ/MNOwJu','C'),('Al52','$2b$10$glCG5emuw/9i5AkcvkB4a.9mzdzCsMsk6ll1MHmcYhDEgSwRgHO3e','C'),('Alex.Trembla','$2b$10$kRUr0EhtHoOivlKxOsU/H.xvGGucbcD9w4KVhZWcnFVLcXNcQUOV6','C'),('Alfred90','$2b$10$0jhCZxBfHElw97XSX1kuUO7UzmpeyHBy4K47ugpX13oRwr65./QfS','E'),('Alfredo38','$2b$10$RYHi.EBaFhIfpGPk7Uh1YOkkad.7OHVfNzQYoeb3235bFf0AOTqF.','C'),('Ali.Koss','$2b$10$S.Qst.wuI/bPRXA49et6wute4uHmuP8hYf6P0d9KIl4oJMQ5ReHFC','E'),('Alphonso_Lan','$2b$10$c3XEfaIkaKK3VxcGcFZ9QOcTxH68UcRkMDfza4vreoGMZJ0VLJixW','C'),('Andre.Ward8','$2b$10$lBZIOjrQLhJCpbqU1decVuLOEZ6lcRu2075i5GcBHWF4f2GhfFz6i','C'),('Andy32','$2b$10$kNL8SerEKUVDqXBPCWPndOX5Ghe.uIA/qNQv4CzbJ.JLWttF37GO.','E'),('Angelica_Bar','$2b$10$/MCe7wb7cMRdZZerBVG0WeBplPVRXqZQ4rpTyTFIKG5WRSF37bvEq','E'),('Antwan.Leann','$2b$10$EGRY2xnmPFBCVVpgS9.44eL8zlKp5.0D260rWha.rop8/4nvcpj42','C'),('Arvel.Collie','$2b$10$zZTktSF8bj7ozegfMFCk/.Tr.9ZHuoyfNQhEh4H6pG2Gqkm/Ted4K','C'),('Aurelia.Hahn','$2b$10$edB8JNh9LuW4gERrvXVfDOvD7zRL4FtXWLq3RD2ygmqE7r7.zH2qO','C'),('Bennett77','$2b$10$HJV5Ngr9C/zRtvctQ2m4DOYHFj4xgffwxh7OM5bLq/3sdqVQwFX/W','C'),('Benton_Huel4','$2b$10$BtAGtZvm2d8vs/o6xMOk7ORbrRcJb/aBo5oOH6A8LArSHm3t4JWuO','C'),('Bethel.Rueck','$2b$10$YHUsqudQnMB0BRn2b6zRAOO8UrekwAXp.Bf9rjq0HxnvIZVKmQWEm','C'),('Bradford.Gut','$2b$10$kG91FM/sRF95NQcCCrZ2BOmVhx5H6bw94ECpWMMFGVq7eXSl3G5gq','C'),('braydenpett','$2b$10$kv7SkV1Mi7D8OCG1VRI6ZesAyEWlkECWACK0XwnlZctATwUOAiTr6','C'),('Calista_Litt','$2b$10$pwAKGzvBOgBKUAJfbgp3j.2OZW1rUaX.zZexnSwrmbuVX5z1YCb0i','C'),('Candace.Mohr','$2b$10$a2ggV0iOKVNJD9fUCfEGvONBb6y8kEY8f6B3DypH4193oFMxarz/W','C'),('Cindy_Schill','$2b$10$CRs2OSsWkCH8Tz2KGzQtceYEYOua9lEqPvsHaOYVF1LpnTu3pSI4C','C'),('Clarabelle_H','$2b$10$uRhXn0k.C/fSVD.gwIk1Re7mvAk3Yp5IZPSjZ9sHml0xO1XiYuyoq','C'),('Coby.Ernser','$2b$10$.SLJCiLh2wNiIFPItjYNKuvJ1WKwUxvgvaraPcaF9qi3YEjw5JeSG','C'),('Cody.Pfanner','$2b$10$AAn.TquWRSJ2d8xGqFDEEOEMd2H7wTwBR70xtdbyAJ6qbOdZN7E9y','C'),('Connor60','$2b$10$tBo8k.HOLQ51zxsf9ITw/u/P7c780533M91WoEmvJONNbDxzQvtcC','E'),('Cornell.Town','$2b$10$RfQCfAikSd.3BUBt4VTQJOYg3LIhdSqKpfnX27J73y9iuh2KqcKBG','C'),('Courtney2','$2b$10$BlQqreXW86T.4H3MyV0DIe05xoqlCcdhJgiz8..0SFr5ImqN1hy0u','E'),('Cristina.Pau','$2b$10$yFPcmwAn1.C2q8zXne1LB.Da962lR1vDi/jIlaVbzjfT0oeEwRqAS','C'),('Cristopher.B','$2b$10$Uu4RLqYWtLYp80.qU70BvOvRf85ZAJl3f3wasFQkJRUsc6/QGD3DS','C'),('davidspring','$2b$10$A4QSrLx/6zlGQHy3zcSj6O3Ab4omaubM6AJKBr8RRunVUCPSV75Hm','C'),('Dedrick35','$2b$10$.Vllw1bGvfB/aI.QbsIv7O.QmelsNZPlXpb21FdxLLVO/4Ht5wzHa','C'),('Delfina_Mohr','$2b$10$Ir67RG/Wn6Py085WPKgJ..kTfLuh9CoZFeiZcZySiPdDPOoGuwt/O','C'),('Denis.Harber','$2b$10$9.ldgueXwXvNpgey9RTZEuwjlY98zSyPD9I7jQL3bB764i.e7Dfnm','C'),('Donato.Hane6','$2b$10$uKF6dk6T140TI6oRQUmOXe1wEPz2Fesi/Tx7bUcBVcvhCT1W8JLfe','C'),('Donato69','$2b$10$5PIXXNGCZfwBFKLjSIFGfuZzgn0wEgF7gDi0s.QZu3xpZj194XEV6','C'),('Durward.Lean','$2b$10$Ci0QiMgqgtNphrBvdgiQs.Hyc7u8DSOQjoAuvhsiiCLIhmJC54xua','C'),('eddieripple','$2b$10$.NE1tlvV17Ik71cvGbciPuowyNEw8lh4vHzbM9p.QV4LoJS5Y1i6C','C'),('Edmond74','$2b$10$bOGUgZ0zhlJAehG0qM7VleMdUTi8Na9Ieta5hpKs0Q1yQ3s3Yh.Y.','E'),('Eleonore.Pau','$2b$10$u.mjJwSQ3SXQQcRWpjW3gOMNqeLBTxubBT.PscNsbFXmdKz4xsb/q','E'),('Ellis16','$2b$10$u0QRAVO6l7XKT/FJ08oHa.LAq2BIY818JNf4u79JAbXviJvalxTtG','C'),('Elmer.Friese','$2b$10$c4JSqOb8i0jjsVsz1GFBeuAKyIR/DS9UMD/.HEI4EG8XRpyuoaNH6','C'),('Eloisa.Turne','$2b$10$YssHdenftFOZ2J/jmKYmyexXgPpqXGvZD3DeFNbY9FZJLngsh3dw.','C'),('Erling_Gottl','$2b$10$alNRCSVYvKMz3RANj980iO47bl91Df9Yr9Azuo0D0EO02yBg8oAF6','C'),('Ernestine_Da','$2b$10$t7U2GJjES.Zo6xFztLiUieOIz5fFAEfZU0LHjBVuhiEdTZRIYdAYe','C'),('Everardo.ORe','$2b$10$GaWHwgM5mSnrZDCr45C5se9Y5E8DtCk1nBkFjLMN88EWz44hh/rb.','C'),('Fae_Koepp','$2b$10$/zi/6Oj0dPZEM.6P7i0kdOPV4D165502n85o9D6qPyWESvPwbqE1u','C'),('Florencio0','$2b$10$7sl/QOE3Vmfbj3hm9YR.S.qlTgj7yt.8CCZGHj4Th9bLxzHzhSPFC','C'),('Gabrielle_La','$2b$10$FPpY2i.U.TYntyA4hxsLCOi/EscLL7896LlmmH.rDNXBC.peQTM1W','C'),('Garland.Weim','$2b$10$zTyJHwZM93r1.cJOhFz9fev/TtJg8Ts5wNUPu1tXI0JCkMBdzR7Iu','C'),('Gerda.Weber','$2b$10$aGcsnWWXwyAORt0JtDMzAObRwEO7PZmLF4SfqoeMHvEtTXjrBx5FO','C'),('Gregory35','$2b$10$0RVkEE5.rcROuR6hZLqUWOk/eNVw7Rde0frgDrL3OrY5sq9mx3dWK','C'),('Gudrun12','$2b$10$EmZwK9oyRBCQIk4iR9uZc.liA9jk0LRteBUpH.7OIiZo2C7eNFY9m','C'),('Hailey.Larso','$2b$10$bSbgPsEf7DpIVpDVAAfUYOmkbivY.16.FpGEK6fTCQ09ToS6JbIBa','C'),('Heidi_Bogisi','$2b$10$JZ47oNo1iVlIeg5lHcBUL.oai.UzitzKY1IdMnwBq0fmdsgcL/SZi','C'),('Hermann.Scha','$2b$10$l1bWPEYOhpSRuABDcPdvLuSsJ6upYqe9Bnsd78L/zgN24mLATc6EK','E'),('Hosea14','$2b$10$cBe4eZlswICq69.cbPHKWuxiYfNJjGZxJdXp1Z2KUYGEYt9rIqlSm','C'),('Ila_Gulgowsk','$2b$10$5u1N5Aj1vW2GmUe05iQKg.k2SNo1.w0RAkKV.1t1glENYX1acMG7q','C'),('Imogene19','$2b$10$cZ.KrKxlKhvdTBSdnrKr6O9g3e0FHzRQhFKOGUe.zsV2bRUCYWEYy','C'),('Ines14','$2b$10$0VBlIND8ZSaJGGXjpGbfgODsMPHukdLEdZTRjJGG/3Ze9FxA4cuLm','E'),('Irving48','$2b$10$ToAuJdH7rs2WTgLVnK2XgOByq2bIp.u7qOvX6cFvC/gnFL3Ykjjvy','C'),('Jace_Nicolas','$2b$10$uiK0zs5w2T1yN79cUHQIfuGciEz6PBx9431IHNtSfHzvFP72noLpe','C'),('Jamarcus_Swa','$2b$10$C2n66Fa6AksMhL.lod7/tuE8v.Cb/o9GVonhzBCVnZnRCqi3oabAK','C'),('janedoe','$2b$10$8C8md3S3/2UcSy4zmuvPvOEBar1YpYiAHDy0IHh7UH.pbNywpVBOO','C'),('jasonpujols','$2b$10$HdZL02A2XqI6XE17ybKks.sJP2oCDK/WaJMvoLEAu3AUDUVcbue/G','C'),('Jazmyn71','$2b$10$VoKKYJa2s1rSUmZ3bEFkv.cdHBIdVpkmU9whUa/XSaV0jMGtzUTUe','C'),('Jeff9','$2b$10$PDxkjXFjj3cxhklHq5r9zOzNeBkdI7E.ZcRcoQeXq7kyFbvVjgMHu','C'),('Jefferey_Gut','$2b$10$vUhZlT3u0oKs.0RmFQGZOeV52YKOsNEhQdS0aAprs7OV739WlXJI2','E'),('Jeremie_Croo','$2b$10$0.cQ3zKWFdnvcdl8otRjZumsI.2gQJEtXX39zWaSBHn/GeJSWSwB2','C'),('Jimmy51','$2b$10$2FFbFwQnC5VFtn7Byvtb.OXybHXoDL7e7cN1kUt4cyPM8XX3kjRR2','C'),('johndoe','$2b$10$wCl3zCxLSFo.JTWP77igdO9gHC.WsVR3astvy5J6AOUa7utfr7b1i','E'),('johndoe2','$2b$10$91WCJdR/NpFs5csJdapuXuEaBOHyBi0b4NSy4NeJP3zQjAB69KLNq','E'),('Johnnie.Rowe','$2b$10$XUlAHAq05L4LSsJRZCG10OPAXlngI8D1PiLeJUPYLUihtteOGCc66','C'),('Jordan.Bernh','$2b$10$TGEX2BqzdZjAV76LinwThepI7Sh7mp.WWE6rEGYIThS23vSRSBpyi','C'),('Jovani_Hodki','$2b$10$eY3J1dYPTrTyj9xHhSTNLuLZ/0l/RNSyxV7y/KJzIyECopJO2bjVW','C'),('Judge5','$2b$10$6JPa7o0ME4t/3Xr7nDHHVe9rArhokHiPSSp0.Iz.tiRVl/IlyEl1y','E'),('Julie_Goyett','$2b$10$rUAOCt8wpk4TdPQ5CL/5iu1GDIDHVTApWJMGMgExyl884zGDuUnoK','C'),('Kaitlyn.OKon','$2b$10$3CO.G8pvLEKkJUVyooN2suCjTmsKJlvSHln1U30y1sexDdjZc6BDe','E'),('Kaleigh_Hage','$2b$10$ZRRJyfTwpJRv2kSEC/nMze4U7mwxX.VLKB09nZGmpN.kTMFJyJ8QS','C'),('Kelton_Harri','$2b$10$q.uet2h/a3BMREnoh2WH6e1Bq/apmLcI4mmVCiNaVnw4KeFgQek3u','E'),('Kieran.Klein','$2b$10$UWnIXtwS0LXQhG8481DFweFlgCaaiEjaV7fa6.cbD.CxOtZrq2Uw.','C'),('Lafayette.Sc','$2b$10$4UPRM7BtHpZhNBaL72kZyueVB9ojQ0H.wbn5vDjnolVScDgMizDLq','C'),('Lauryn.Marvi','$2b$10$pY48D7Nj9cYyEkhBLl8pou.SCrJFf3zAx3x1.ay1hM5TuhP3rMLAW','C'),('Layla44','$2b$10$0ocl0itJ.w/2c8KNykN7ReMr7zjdz2xspCfmO4RGzuYBu67Dwbtka','C'),('Leonora_Blan','$2b$10$kpxDQ1gPQswBEd3F6WC3..z/3pWsnQuCTC6TxhstOf4XFnGKrEMe.','C'),('Lera_Leannon','$2b$10$GZF31Sz8Ra1FxncWJ2u8iuZFnD99eLJ2rewGNgzqBzbVh6Yd965p6','C'),('Lon_Sanford','$2b$10$OlS0afIHsawR6NGXwI3TGet1YnTL.NgVUscXqfDS/PgF5lE0K9Mti','C'),('London85','$2b$10$EQidc8q9BHcFVBcRiUcmbOyYNtxeq5W95QtR5k5dDcToBeTudwQb.','C'),('Lottie_McLau','$2b$10$hIXgqqfzrGD/4hHg7RzyAuhVrbdIbPjFycJSrlXP5wotzPURthgTi','E'),('Mac92','$2b$10$Q0hZ.9WXIiCgpu9OUtRxkeggF8p0el4vzOBQwSCnuCjHAnF4HJ7fq','C'),('Madyson76','$2b$10$3.FerpGx0osORHFDmh2mMe35NfmUyjdRSZMggakhoqpQtKuyO62mS','C'),('Marisol89','$2b$10$oGtQLmN2sJQrzRGYEBQj4e1pk2eAgF.06fOud.djkmZZOEMSNmNM2','C'),('Natalia60','$2b$10$ixif5iXaV0qehaOumBeVzOz9IO4G./964DHHVf/Vry4sOd4RDIJKq','C'),('Natalie44','$2b$10$Aelt1eUD/uyGC9L.T6.uzekv1PX1x81jsbR2dNFvbjh/YawPUgTD6','C'),('Noe52','$2b$10$4VXfIept5bjsuAsggFFBO.eoHk5yTcPh6l511pSnVzWIgEylWjSbK','C'),('Oran_Spinka','$2b$10$LyOOs7FJqZ3mJe9etWakg.f5DmC.4p6HoxY4x1zXrxwq7e9CASuA6','C'),('Oscar.Hayes4','$2b$10$HOpcxBWVZcz2nuHNUOrlEe2XX9dcKVPaEp1IhLgTnX6FKwxxP4bbe','C'),('Ozella.Bernh','$2b$10$/UE6gmihI8rVqn6gVwnnd.MXlVZ5fBkLoqatS2pt1d4rp1SF./Z62','E'),('Pattie_Ruthe','$2b$10$QXBadcy7.x.WyDZj.FIZ1.3g1Dd5eMqCMx9kiSuMUjwgISYJSzhw2','C'),('Philip_Buckr','$2b$10$.mXrToH/dCZwl5sAIeQ8IO/XhfwBkXqSvWfwFjh5eRRe7CEEHWbLe','C'),('Rebekah79','$2b$10$JvH.QIJ5MP3JneKmRLyfXe7svbmpcJrDx/FgtCEyxL4O3qp1Ac8XG','C'),('Reese65','$2b$10$E8KM.yDu7gtJ2ReymTgKNOiIJAy/h/izufPlnZIwB6V8.Zsso9V8q','C'),('Reyes_Larson','$2b$10$mUYrCNt82yZosWOZuAFlVuuEUAamwikRTY78M6cOCLftULqpQHcrG','C'),('Reymundo_Kub','$2b$10$WwwWlKXntVAW4Ie9Y9FwoehfxPN0W6rspBvtz3xYagRN9cOeYRKGu','C'),('Richmond.Lea','$2b$10$1zoFzsdgXES8CAU2SpQwP.mYLR7adURyfiWcEd0pafQdkzc8REAva','C'),('Rodger.Kunde','$2b$10$ppqutSLLXEno8TDNLmI01..x6rPwvVY80EXPGSBpXMl45xcdrS9AO','C'),('Rogers15','$2b$10$yPeGe9ewS7tnL14aY65XWelWAJqezrHxfGIOpmSPGO6KqSP0TUMLa','C'),('Roosevelt_Ri','$2b$10$lWep5eA4JrU1uXFR1U6EduCIkwz95DwdxjzZH0ewPJghEech6l2qW','C'),('Rosamond_Kas','$2b$10$ghZpzjdL3UUmkIG80KXD5umcTkZgnI.gCcgP5mdKt1nCESaHIQ/52','C'),('Salma_Schroe','$2b$10$l3UdLcznnDi99rzuw3h9HuFv4YksYt9Md8raL10EeG/dqIsm.oNhu','C'),('sarafezz','$2b$10$LDIT2IQt55wCwYXBvcx/j.3XZP8BjeSaA0GLbQD.cHfILyJMVw8km','C'),('Scotty.Kertz','$2b$10$eZWLNaI0tLGRV6TFihJOKOUrVtHaAcF.CQPJbDyAkskxJM4zSmmA6','E'),('Shayna.Lakin','$2b$10$jiJfVwr/hStCFPG3Pd3vzeZnfeZZ2SkjqCP05w.Z4j4AISXuQ99JC','C'),('Sincere89','$2b$10$XKaYgB2VFp4nkjvOu4DWSevJMN3w7bZjejC93PP3ULSQVn83uTnWK','C'),('Stefanie69','$2b$10$JkJB4cA9dOVO9oS96lo52.qPH8jeUSYwSSjPaNHn4tSZik6EoVlYm','C'),('Tara_Simonis','$2b$10$p9aZQxXXfmhNl/9.D3nTXeUkrboW3wGIRhD9iqX7dxEyZY/r/B.wm','E'),('Tremayne.Jac','$2b$10$9ZtHzqbCVerMw/ULfHA6vuWFd2v9ScKFjvxgl0MIygmVD9ci8ShZe','C'),('Trent.Schroe','$2b$10$NrxTgnRTb0gJb27jnXTBDurADw06DZOrPxXJKOHhGW1PKclK3y136','C'),('Trenton_Mori','$2b$10$eVVBjV.UzeJ.PM09naji.edI/wKLH5jyw/AYF5DQgUQURv0kAOURW','C'),('Tristian_Ray','$2b$10$n4BeF/hInAb6B2jdVkNF2.7gsNEaY8VIWguPxrY2oTgpin2baXrAO','C'),('Vernice.Mohr','$2b$10$YmtX6wj52ZRkUKVEVXt8cel1mtzWcXvYUOIBFGo82YR7qnQbtNGcO','C'),('Waylon_Barro','$2b$10$hGl7MkT334NgenqFgHK/1.cT9C6kFcbbrhAlCQheP2UF1jN2h/MZ.','E'),('Wilfredo_Rus','$2b$10$kBh89gXLc/.tTvXar6limerIXz3ou9LxUX9DtKlkuD6rq2Lulywd6','C'),('Wilhelm.Steh','$2b$10$Fn1rrsc/vo7BY3AVObY03OQVp/XrBAw50oggC86BM2g3Y9blaGvuu','C'),('Yasmeen56','$2b$10$uDgr/uf8F11xH8vmRcpAWO2GArCVKZ0XnYMHOevkbmdZPShjw0Z9K','C'),('Zachariah.Br','$2b$10$72XfWbiZb46hQ9KvMSyQaut1TI5Sr0i4E8ZuwLIV0k3Jn3n5cTuia','C'),('Zane.Bernhar','$2b$10$fkVU9egvZf0w1iZhIBveoOQK2.jYfRLFZicq6hcNcsM2zG0zcqyZq','C'),('Zola.Kohler','$2b$10$Ozhq7Lh.Qsv3/stLHowVieyC.l3aZDa97dqRNzoQAjE8djCVtX/Cu','E'),('Zora67','$2b$10$YduTM4/e/u3YfAGsmKc.TeJglFXHM84jXBnQsVLMpD6gvu1ELE06.','C');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `zip` char(5) NOT NULL,
  `state` char(2) NOT NULL,
  `city` varchar(20) NOT NULL,
  `street_addr` varchar(40) NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=403 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (9,'16801','PA','State College','114 Hetzel Street'),(10,'16801','PA','State College','246 Highland Avenue'),(297,'32667','PA','Port Maria','4840 Wyman Glens'),(298,'63814','PA','East Chelsea','27178 Cruickshank Crest'),(299,'02653','PA','Elzaside','1670 Karley Bypass'),(300,'10766','PA','Zoiehaven','557 Sage Brooks'),(301,'76132','PA','Fort Lucio','682 Manor Drive'),(302,'41131','PA','Oak Park','57898 Grant Ridge'),(303,'07619','PA','Norfolk','384 Fadel Estate'),(304,'28386','PA','North Reillychester','25503 Alma Street'),(305,'01659','PA','Port Alexandrostad','38304 Marcella Brooks'),(306,'73398','PA','New Jermey','92179 Jackson Avenue'),(307,'55099','PA','Urbanfurt','480 Gerhold Streets'),(308,'17861','PA','East Vadaberg','16348 Sheila Creek'),(309,'58505','PA','St. Charles','3690 The Green'),(310,'37449','PA','Surprise','5474 Tiara Rue'),(311,'91829','PA','Weissnatfurt','112 Park Crescent'),(312,'86599','PA','Olympia','141 Goodwin Corner'),(313,'50938','PA','Earlineboro','896 Nader Alley'),(314,'38234','PA','White Plains','4729 Northfield Road'),(315,'03206','PA','Elnoraborough','4316 Martin Luther King Boulevard'),(316,'80616','PA','South Beverly','99350 Quigley Creek'),(317,'25719','PA','New Urielfield','793 Michaela Mall'),(318,'78184','PA','Torpport','833 Kamryn Cliff'),(319,'06123','PA','Lake Joesph','9720 Stanton Way'),(320,'37321','PA','Tulsa','3705 Riverside Avenue'),(321,'75078','PA','South Karli','39546 Ashlee Meadow'),(322,'89270','PA','West Allis','52659 Brent River'),(323,'26263','PA','South Alycecester','1698 Jerde Landing'),(324,'63859','PA','Reichertfort','8694 N Elm Street'),(325,'62434','PA','Dearborn','9714 Thompson Greens'),(326,'24643','PA','Morarfort','7882 Hahn Club'),(327,'10264','PA','Port Donnellstad','104 Highfield Close'),(328,'13863','PA','Oniefort','38519 Bernhard Skyway'),(329,'15395','PA','Fort Kaden','6609 Jefferey Trail'),(330,'78953','PA','Fort Savionworth','7372 Salma Ford'),(331,'61357','PA','East Ezekiel','5668 Jasper Ridges'),(332,'46976','PA','Broken Arrow','5471 Erin Turnpike'),(333,'13693','PA','Annabury','652 Fay Valley'),(334,'12963','PA','Fort Antonio','8461 Maida Circle'),(335,'15103','PA','Enterprise','5630 Katlynn Hill'),(336,'69309','PA','Gresham','599 Murray Square'),(337,'44103','PA','Bartellberg','1830 Alden Loop'),(338,'61396','PA','Port Jillianstad','15688 Hauck Well'),(339,'86976','PA','Croninchester','20126 Woodside Road'),(340,'94914','PA','Eastvale','48430 Bins Lakes'),(341,'48200','PA','Keelingside','993 The Hawthorns'),(342,'96515','PA','Port Abdul','75147 Lincoln Road'),(343,'61636','PA','Arlington','3882 Dooley Crossing'),(344,'11049','PA','Jonesboro','321 Kunde Key'),(345,'90853','PA','Shaniastead','3352 Weimann Unions'),(346,'16493','PA','Juanitashire','577 Pattie Forges'),(347,'85149','PA','Jenniestad','65578 Swift Curve'),(348,'75089','PA','Skilesshire','856 Cormier Park'),(349,'95653','PA','Archibaldport','365 Willow Close'),(350,'45079','PA','North Santiagoworth','142 Schimmel Cliffs'),(351,'01753','PA','Fort Julesside','8177 Edward Street'),(352,'48930','PA','Port Sandrine','4469 Wilfred Dale'),(353,'20744','PA','Jonesworth','88962 Chestnut Drive'),(354,'62171','PA','Lake Greggton','33897 Freeda River'),(355,'99734','PA','Lake Annabelport','81151 Elinor Place'),(356,'81478','PA','North Karolann','289 Goodwin Summit'),(357,'15139','PA','Anthonyburgh','61859 Nelle Row'),(358,'32789','PA','East Janickville','3899 Stoltenberg Drive'),(359,'94364','PA','East Gloriafort','9586 Lake Road'),(360,'93891','PA','New Estellastad','72909 Mosciski Branch'),(361,'56673','PA','Rainaside','8163 Barrows Bridge'),(362,'05212','PA','MacGyverburgh','61185 St Mary\'s Close'),(363,'02030','PA','South Nataliaworth','7758 S Railroad Street'),(364,'99258','PA','East Margotberg','49465 Thomas Keys'),(365,'25876','PA','Lake Molly','644 Madelynn Hill'),(366,'21656','PA','North Oda','72391 Assunta Grove'),(367,'00471','PA','Fort Rodrick','4974 Princes Street'),(368,'64398','PA','Malden','89715 Main Road'),(369,'08239','PA','Port Randal','25171 Blair Lakes'),(370,'31838','PA','Fort Berta','81473 Smitham Vista'),(371,'49274','PA','Arlington Heights','92103 Lesch Flats'),(372,'17387','PA','Turcottefort','686 Madalyn Place'),(373,'13032','PA','East Rosieshire','6932 Dameon Viaduct'),(374,'22627','PA','Bayonne','4216 The Paddock'),(375,'34480','PA','Thielchester','1476 Dustin Court'),(376,'06713','PA','Palatine','9150 Aidan Fall'),(377,'10807','PA','Verniecester','10224 Hawthorn Avenue'),(378,'89096','PA','St. Clair Shores','972 Kemmer Crossroad'),(379,'54057','PA','Melvinaboro','3894 Bode Avenue'),(380,'66771','PA','South Candido','301 Dallas Extension'),(381,'90255','PA','Bolingbrook','47780 Turner Forges'),(382,'35557','PA','Port Petraborough','52517 Bridge Street'),(383,'02427','PA','Eliseofurt','8520 Raegan Keys'),(384,'16704','PA','Lake Tyrique','5141 Well Lane'),(385,'42620','PA','Mooreboro','79749 S 3rd Street'),(386,'73704','PA','North Annamaechester','332 Franey Extensions'),(387,'25160','PA','Casper','3893 Runolfsdottir Row'),(388,'70143','PA','Harrisfurt','70192 Maximus Park'),(389,'07516','PA','North Ricoland','91369 Audreanne Via'),(390,'10445','PA','Katelinfort','968 Chapel Close'),(391,'36276','PA','Fort Brando','433 D\'angelo Fords'),(392,'13419','PA','Rowlett','134 Leilani Club'),(393,'34496','PA','Shieldstown','734 Enos Springs'),(394,'25584','PA','Chandler','3341 Dillan Gateway'),(395,'15778','PA','West Danikaberg','245 Shanahan Alley'),(396,'20256','PA','Jalonland','102 Berta Coves'),(397,'18947','PA','Pipersville','5579 Tollgate Road'),(398,'16801','PA','State College','246 Highland Avenue'),(399,'18938','PA','Holicong','2875 Stover Trail'),(400,'18938','PA','New Hope','5743 Lower York Road'),(401,'16801','PA','State College','123 Highland Avenue'),(402,'16801','PA','State College','893 Highland Avenue');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `cust_username` varchar(12) NOT NULL,
  `fname` varchar(12) NOT NULL,
  `lname` varchar(12) NOT NULL,
  `cust_payment_id` int DEFAULT NULL,
  `address_id` int NOT NULL,
  PRIMARY KEY (`cust_username`),
  KEY `address_id_idx` (`address_id`),
  KEY `cust_payment_id` (`cust_payment_id`),
  CONSTRAINT `address_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `cust_payment_id` FOREIGN KEY (`cust_payment_id`) REFERENCES `payment` (`payment_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `cust_username` FOREIGN KEY (`cust_username`) REFERENCES `account` (`username`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('Abel68','Darrick','Welch',281,297),('Al52','Wilber','Schmitt',354,370),('Alex.Trembla','Levi','Walker',307,323),('Alfredo38','Merle','Zemlak',336,352),('Alphonso_Lan','Mariam','Berge',289,305),('Andre.Ward8','Torrance','Schaden',317,333),('Antwan.Leann','Giles','Koch',316,332),('Arvel.Collie','Brenden','Will',341,357),('Aurelia.Hahn','Jaycee','West',312,328),('Bennett77','Henry','Cassin',320,336),('Benton_Huel4','Roxane','Pouros',376,392),('Bethel.Rueck','Alden','Murphy',302,318),('Bradford.Gut','Leonard','Toy',283,299),('braydenpett','Brayden','Pettigrew',382,398),('Calista_Litt','Fred','Rolfson',311,327),('Candace.Mohr','Nils','Hermann',318,334),('Cindy_Schill','Orland','Spinka',358,374),('Clarabelle_H','Eva','O\'Connell',310,326),('Coby.Ernser','Addie','Littel',282,298),('Cody.Pfanner','Marlee','Jast',322,338),('Cornell.Town','Jaiden','Lesch',348,364),('Cristina.Pau','Howard','Jenkins',327,343),('Cristopher.B','Robin','Jakubowski',315,331),('davidspring','David','Spring',384,400),('Dedrick35','Carolanne','Harris',361,377),('Delfina_Mohr','Buford','Lemke',357,373),('Denis.Harber','Katherine','Kutch',326,342),('Donato.Hane6','Clarissa','Kertzmann',328,344),('Donato69','Markus','Deckow',347,363),('Durward.Lean','Hipolito','Kuhlman',298,314),('eddieripple','Eddie','Ripple',385,401),('Ellis16','Augusta','Morar',309,325),('Elmer.Friese','Zachary','Pollich',319,335),('Eloisa.Turne','Patsy','Conroy',284,300),('Erling_Gottl','Tate','Schowalter',300,316),('Ernestine_Da','Clovis','Terry',367,383),('Everardo.ORe','Freeda','Friesen-Kihn',349,365),('Fae_Koepp','Felipa','Kozey',333,349),('Florencio0','Monte','Kuhic',339,355),('Gabrielle_La','Idella','Lubowitz',355,371),('Garland.Weim','Lindsey','Sauer',374,390),('Gerda.Weber','Concepcion','Walter',293,309),('Gregory35','Ibrahim','Hauck',334,350),('Gudrun12','Rae','Streich',304,320),('Hailey.Larso','Foster','Connelly',337,353),('Heidi_Bogisi','Myron','Grant',294,310),('Hosea14','Berneice','Olson',372,388),('Ila_Gulgowsk','Ivah','Schamberger',362,378),('Imogene19','Royal','Becker',295,311),('Irving48','Crawford','Bins',365,381),('Jace_Nicolas','German','Larkin',344,360),('Jamarcus_Swa','Magnolia','Prosacco',329,345),('janedoe','Jane','Doe',381,397),('jasonpujols','Jason','Pujols',383,399),('Jazmyn71','Mac','Ryan',297,313),('Jeff9','Ewell','Rodriguez',308,324),('Jeremie_Croo','Damaris','VonRueden',359,375),('Jimmy51','Gideon','Upton',364,380),('Johnnie.Rowe','Rigoberto','Cormier',368,384),('Jordan.Bernh','Norval','Champlin',323,339),('Jovani_Hodki','Cleo','Cummings',287,303),('Julie_Goyett','Juliet','Hayes',290,306),('Kaleigh_Hage','Delilah','Marquardt',378,394),('Kieran.Klein','Chelsie','Littel',380,396),('Lafayette.Sc','Kianna','Gibson',369,385),('Lauryn.Marvi','Titus','Flatley',330,346),('Layla44','Jakob','Cormier',305,321),('Leonora_Blan','Britney','Pagac',346,362),('Lera_Leannon','Clementina','Wolff',351,367),('Lon_Sanford','Myra','Barton',345,361),('London85','Bryana','Torp',340,356),('Mac92','Ellie','Weimann',286,302),('Madyson76','Alysa','Schinner',288,304),('Marisol89','Dylan','Toy',363,379),('Natalia60','Naomie','Strosin',356,372),('Natalie44','Joanie','Olson',366,382),('Noe52','Donato','Corwin',324,340),('Oran_Spinka','Charity','Koch-Fadel',353,369),('Oscar.Hayes4','Katelin','Ferry',373,389),('Pattie_Ruthe','Freeman','Rippin',342,358),('Philip_Buckr','Nicklaus','Johnson-Torp',335,351),('Rebekah79','Novella','Bruen',343,359),('Reese65','Jaunita','Balistreri',296,312),('Reyes_Larson','Ayden','Willms',350,366),('Reymundo_Kub','Einar','Tillman',301,317),('Richmond.Lea','Greta','Cummings',371,387),('Rodger.Kunde','Jaida','Wunsch',352,368),('Rogers15','Joshua','Padberg',291,307),('Roosevelt_Ri','Delpha','Douglas',331,347),('Rosamond_Kas','Pamela','Windler',306,322),('Salma_Schroe','Merlin','Koelpin',338,354),('sarafezz','Sara','Fezzuoglio',386,402),('Shayna.Lakin','Timothy','Watsica',321,337),('Sincere89','Alvina','Prosacco',303,319),('Stefanie69','Kiarra','Rippin',379,395),('Tremayne.Jac','Stanley','McDermott',325,341),('Trent.Schroe','Sabryna','Yost',313,329),('Trenton_Mori','Kaylin','Larson',299,315),('Tristian_Ray','Roger','Christiansen',360,376),('Vernice.Mohr','Barney','Funk',377,393),('Wilfredo_Rus','Houston','Hamill',332,348),('Wilhelm.Steh','Marisa','Reichel',292,308),('Yasmeen56','Garland','Metz',370,386),('Zachariah.Br','Deven','Gulgowski',375,391),('Zane.Bernhar','Kennith','Torp',314,330),('Zora67','Antonina','Grant',285,301);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_order`
--

DROP TABLE IF EXISTS `customer_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_order` (
  `username` varchar(12) NOT NULL,
  `time_placed` time NOT NULL,
  `address_id` int NOT NULL,
  `payment_id` int NOT NULL,
  `restaurant_id` int NOT NULL,
  PRIMARY KEY (`username`),
  KEY `address_id_idx` (`address_id`),
  KEY `payment_id_idx` (`payment_id`),
  KEY `order_restaurant_id_idx` (`restaurant_id`),
  CONSTRAINT `order_address_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `order_restaurant_id` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`restaurant_id`),
  CONSTRAINT `order_username` FOREIGN KEY (`username`) REFERENCES `customer` (`cust_username`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `payment_id` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`payment_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_order`
--

LOCK TABLES `customer_order` WRITE;
/*!40000 ALTER TABLE `customer_order` DISABLE KEYS */;
INSERT INTO `customer_order` VALUES ('braydenpett','03:58:01',398,382,1),('davidspring','04:02:20',400,384,1),('eddieripple','16:11:14',401,385,1),('jasonpujols','03:58:50',399,383,1),('sarafezz','16:12:44',402,386,1);
/*!40000 ALTER TABLE `customer_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `emp_username` varchar(12) NOT NULL,
  `fname` varchar(12) NOT NULL,
  `lname` varchar(12) NOT NULL,
  `emp_restaurant_id` int NOT NULL,
  PRIMARY KEY (`emp_username`),
  KEY `emp_restaurant_id_idx` (`emp_restaurant_id`),
  CONSTRAINT `emp_restaurant_id` FOREIGN KEY (`emp_restaurant_id`) REFERENCES `restaurant` (`restaurant_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `emp_username` FOREIGN KEY (`emp_username`) REFERENCES `account` (`username`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('Alfred90','Elmer','Von',1),('Ali.Koss','Cruz','Rogahn',1),('Andy32','Joseph','Nolan',1),('Angelica_Bar','Katelyn','Boehm',1),('Connor60','Sibyl','Jenkins',2),('Courtney2','May','Runolfsson',2),('Edmond74','Reyna','Schinner-Sim',2),('Eleonore.Pau','Erling','Sanford',1),('Hermann.Scha','Jarod','Glover',2),('Ines14','Lura','Schamberger',1),('Jefferey_Gut','Eileen','Blick',2),('johndoe','John','Doe',1),('johndoe2','John','Doe',2),('Judge5','Tracy','Sauer',2),('Kaitlyn.OKon','Willis','Hagenes',1),('Kelton_Harri','Baby','Beahan',1),('Lottie_McLau','Kyleigh','Padberg',1),('Ozella.Bernh','Mohammad','Goyette',1),('Scotty.Kertz','Lucile','Hayes',1),('Tara_Simonis','Geovanny','Spencer-Rice',2),('Waylon_Barro','Augusta','DuBuque',1),('Zola.Kohler','Adelbert','Bode',1);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_item`
--

DROP TABLE IF EXISTS `menu_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_item` (
  `name` varchar(50) NOT NULL,
  `price` decimal(5,2) NOT NULL,
  `category` varchar(20) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_item`
--

LOCK TABLES `menu_item` WRITE;
/*!40000 ALTER TABLE `menu_item` DISABLE KEYS */;
INSERT INTO `menu_item` VALUES ('Alaska Roll',7.00,'Sushi','Salmon, avocado, and cucumber in a sushi roll.'),('Brayden Roll',17.99,'Sushi','The most delicious roll ever.'),('California Roll',6.00,'Sushi','Imitation crab, cucumber, and avocado in a sushi roll.'),('Chicken Pad Thai',13.99,'Noodle','Pad Thai noodle dish with chicken, lime, spice, and a side of peanuts.'),('Classic Roll',7.00,'Sushi','Tuna, avocado, and cucumber in a sushi roll.'),('Clear Soup',3.00,'Soup','Mushrooms, fried onions, and scallions in a chicken broth.'),('Crazy Roll',15.00,'Special Sushi','Spicy yellowtail and tempura pineapple inside topped with salmon and avocado.'),('Dragon Roll',13.00,'Special Sushi','Eel cucumber roll with avocado and eel sauce on top.'),('Eddie Roll',17.99,'Sushi','The second most delicious roll ever.'),('Eel Cucumber Roll',7.00,'Sushi','Eel and cucumber in a sushi roll.'),('Egg Roll',2.50,'Appetizer','Crispy fried cabbage and pork with egg roll wrap.'),('Garden Salad',3.50,'Salad','Spring mix, cucumbers, and tomatoes with a side of ginger dressing.'),('Heart Lover Roll',16.00,'Special Sushi','Spicy tuna and avocado inside topped with tuna.'),('Kani Salad',6.50,'Salad','Imitation crab, cucumber, crunchy, caviar, and spicy mayo.'),('Lobster Tempura Roll',16.00,'Special Sushi','Lobster tempura with salmon and avocado on top.'),('Miso Soup',3.00,'Soup','Tofu, seaweed, and scallions in a miso broth.'),('New York Roll',6.50,'Sushi','Smoked salmon and apple in a sushi roll.'),('Pork Gyoza',7.00,'Appetizer','Steamed pork dumplings.'),('Rainbow Roll',13.00,'Special Sushi','Tuna, salmon, white fish, and avocado over top of a California Roll.'),('Salmon Cucumber Roll',8.99,'Sushi','A sushi roll with salmon and cucumber.'),('Salmon Sashimi',7.00,'Sashimi','3 pieces of salmon.'),('Scallion Pancake',6.50,'Appetizer','Made with flour and green onions served with a ginger dumpling sauce.'),('Shrimp Avocado Roll',6.00,'Sushi','Shrimp and avocado in a sushi roll.'),('Shrimp Shumai',7.00,'Appetizer','Steamed shrimp dumplings.'),('Shrimp Tempura Roll',7.50,'Sushi','Shrimp tempura, lettuce, avocado, and cucumber in a sushi roll with eel sauce on top.'),('Spicy Tuna Roll',7.00,'Sushi','A sushi roll with spicy tuna inside.'),('Spicy Tuna Tempura Roll',14.00,'Special Sushi','Spicy chopped tuna roll tempura with spicy mayo, eel sauce, and scallions on top.'),('Spring Roll',2.50,'Appetizer','Deep fried vegetable roll.'),('Sweet Potato Roll',5.00,'Sushi','Sweet potato tempura in a sushi roll.'),('Tuna Pizza',14.00,'Appetizer','Sliced tuna and avocado over a tortilla pancake.'),('Tuna Roll',6.99,'Sushi','A sushi roll with fresh tuna inside.'),('Tuna Sashimi',7.00,'Sashimi','3 pieces of tuna.'),('Vegetable Gyoza',7.00,'Appetizer','Steamed vegetable dumplings.'),('Vegetable Lo Mein',13.00,'Noodle','Lo Mein with mixed vegetables inside.'),('Wonton Soup',3.00,'Soup','Pork wontons in a chicken broth.'),('Yellowtail Sashimi',7.00,'Sashimi','3 pieces of yellowtail.');
/*!40000 ALTER TABLE `menu_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `username` varchar(12) NOT NULL,
  `item_name` varchar(20) NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`username`,`item_name`),
  KEY `item_name_idx` (`item_name`),
  CONSTRAINT `item_name` FOREIGN KEY (`item_name`) REFERENCES `menu_item` (`name`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `username` FOREIGN KEY (`username`) REFERENCES `customer_order` (`username`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES ('braydenpett','Brayden Roll',1),('braydenpett','Spicy Tuna Roll',1),('davidspring','Spicy Tuna Roll',1),('eddieripple','California Roll',2),('eddieripple','Clear Soup',1),('eddieripple','Dragon Roll',1),('eddieripple','Egg Roll',1),('eddieripple','Garden Salad',1),('eddieripple','Miso Soup',1),('eddieripple','Shrimp Avocado Roll',1),('eddieripple','Sweet Potato Roll',2),('jasonpujols','Chicken Pad Thai',1),('jasonpujols','Salmon Cucumber Roll',1),('jasonpujols','Tuna Roll',4),('sarafezz','Brayden Roll',3),('sarafezz','Chicken Pad Thai',1),('sarafezz','Crazy Roll',2),('sarafezz','Scallion Pancake',1),('sarafezz','Shrimp Shumai',2),('sarafezz','Spicy Tuna Roll',8);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `card_number` varchar(19) NOT NULL,
  `expiration` date NOT NULL,
  `cvc` varchar(4) NOT NULL,
  `type` char(1) NOT NULL,
  PRIMARY KEY (`payment_id`),
  CONSTRAINT `payment_chk_1` CHECK ((`type` in (_utf8mb4'C',_utf8mb4'D')))
) ENGINE=InnoDB AUTO_INCREMENT=387 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (281,'4935479944384','2024-12-09','267','C'),(282,'5141342258865117','2025-01-28','529','C'),(283,'4250074534232099','2025-11-13','184','C'),(284,'347625967250552','2025-01-25','771','D'),(285,'6011629866673428','2025-04-22','816','C'),(286,'3529046510274540','2024-12-29','323','D'),(287,'36549072645314','2025-05-02','947','C'),(288,'4620934661837','2025-08-25','656','D'),(289,'2536938108953134','2025-08-06','571','D'),(290,'6458570116036936','2025-03-24','309','D'),(291,'376928475457527','2025-10-22','146','D'),(292,'373787459442076','2025-05-16','472','D'),(293,'36101352690956','2024-12-14','809','C'),(294,'5594361382989835','2025-03-29','408','D'),(295,'5532637525769233','2025-01-04','882','C'),(296,'2586076018607844','2025-07-13','097','C'),(297,'4485214357937963','2025-11-17','649','C'),(298,'36451063023975','2025-06-02','970','C'),(299,'6011623455513054','2025-01-01','480','D'),(300,'5270858525448513','2025-02-01','776','D'),(301,'3587115239456511','2025-11-29','360','D'),(302,'349433953812677','2025-01-12','456','D'),(303,'30290761249235','2025-01-21','396','D'),(304,'3529567003388810','2025-05-03','722','D'),(305,'6498623543651439','2025-04-10','528','C'),(306,'6446854471962406','2025-10-10','333','D'),(307,'2518116529006012','2025-04-20','793','D'),(308,'2374686687518787','2025-04-29','753','D'),(309,'5490496776378925','2024-12-23','444','D'),(310,'5433786870996873','2025-04-24','035','C'),(311,'341690403500420','2024-12-07','564','D'),(312,'4244925108094133','2025-08-29','029','D'),(313,'30580810289897','2025-09-28','060','D'),(314,'4222129572512938','2025-10-18','890','D'),(315,'373557227337175','2025-02-14','267','C'),(316,'36608286001589','2025-08-19','242','C'),(317,'2296025646421301','2025-04-15','230','D'),(318,'5477860269394953','2025-08-12','478','D'),(319,'3576611246745238','2025-05-29','244','D'),(320,'36786799364510','2025-07-13','559','D'),(321,'375975963269394','2025-02-23','301','C'),(322,'30474719795271','2025-07-03','197','C'),(323,'347760982721640','2025-08-22','083','C'),(324,'4170236945116','2025-07-04','653','C'),(325,'4915812066558','2025-05-03','942','D'),(326,'6442627762151094','2024-12-08','998','D'),(327,'4802489124340248','2025-08-05','562','D'),(328,'5534278919348884','2025-03-10','154','D'),(329,'5253502277084396','2025-08-15','482','C'),(330,'341366467482686','2025-01-02','233','C'),(331,'6511629012199037','2025-05-21','450','D'),(332,'4187958717796','2025-01-21','578','C'),(333,'3586087312557724','2025-08-03','390','D'),(334,'6500510918253980','2025-04-14','216','C'),(335,'343736180799020','2025-04-12','115','C'),(336,'5491593696954311','2025-02-25','552','C'),(337,'372035724616426','2025-02-05','587','C'),(338,'4724745777194','2025-10-31','986','C'),(339,'3528973141850110','2025-10-06','662','D'),(340,'4048373831945','2025-08-04','120','C'),(341,'370600856397780','2025-08-26','465','D'),(342,'36370710742417','2025-02-21','654','D'),(343,'30034620062730','2025-02-06','048','D'),(344,'3569637313406783','2025-11-08','009','C'),(345,'3529167903147885','2025-10-27','081','D'),(346,'30472076794614','2025-04-22','073','C'),(347,'345899376058508','2025-01-02','373','C'),(348,'4738225165787','2025-11-06','587','D'),(349,'4976786777730090','2024-12-31','097','C'),(350,'3528398845343438','2025-02-17','625','C'),(351,'5150598045517380','2025-11-29','148','D'),(352,'5129184660291706','2025-07-01','208','D'),(353,'3531413087338338','2024-12-31','374','C'),(354,'3566925974478131','2025-05-28','571','D'),(355,'4052411275255','2025-04-12','255','D'),(356,'3529958398080726','2025-07-09','504','D'),(357,'6548620418765189','2025-04-15','285','D'),(358,'4874896371541505','2025-11-07','791','D'),(359,'342390183123985','2025-03-23','803','D'),(360,'6011621855753217','2025-08-22','569','C'),(361,'3543303865731489','2025-01-17','190','C'),(362,'36574030932059','2025-07-03','675','C'),(363,'344986448528336','2025-07-19','742','D'),(364,'5406825441667473','2025-02-04','067','C'),(365,'6011629271461685','2025-04-28','097','C'),(366,'4139652768963','2025-11-18','561','D'),(367,'6011621626528127','2025-01-18','445','D'),(368,'6533540120226764','2024-12-30','288','D'),(369,'6464620696338061','2025-02-20','415','C'),(370,'6457623175900627','2025-11-30','042','D'),(371,'30214252649265','2025-06-06','509','C'),(372,'2594587252517929','2025-04-14','954','C'),(373,'379669579115796','2025-07-28','434','C'),(374,'374514260014673','2025-03-25','015','C'),(375,'2448255611280831','2025-01-23','169','D'),(376,'4304472311176','2025-01-18','813','C'),(377,'348758274445778','2024-12-23','709','C'),(378,'3529123907442392','2025-06-12','615','C'),(379,'2687469519183340','2024-12-30','785','C'),(380,'6461622893211680','2024-12-08','720','C'),(381,'1234567812345678','2024-12-01','123','D'),(382,'1234567812345678','2024-12-27','123','C'),(383,'2020202020202020','2025-01-09','456','D'),(384,'1234567812345678','2024-12-28','123','D'),(385,'89546738245167289','2026-02-12','942','D'),(386,'64738192039173544','2025-01-11','491','C');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `restaurant_id` int NOT NULL AUTO_INCREMENT,
  `address_id` int NOT NULL,
  PRIMARY KEY (`restaurant_id`),
  KEY `address_id_idx` (`address_id`),
  CONSTRAINT `res_address_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,9),(2,10);
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-06 11:18:21
